import '@/view/BaseLayout/index.scss'
import * as React from 'react'
import PropTypes from "prop-types"
// import Routers from '@/router/index'
// import NavHeader from '@/components/nav-header/index.tsx'
// import SiderBar from '@/components/sider-bar'
// import ReactDOM from 'react-dom'

const Box = React.Fragment

class CommentInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: localStorage.getItem('username') || '游客用户',
            content: ''
        }
    }

    componentDidMount () {
        this._setUsernameFocus()
    }

    _setUsernameFocus () {
        this.input.focus()
    }

    _setContentFocus () {
        this.textarea.focus()
    }

    _handleInputBlur (e) {
        let { name, value } = e.target
        localStorage.setItem(name, value)
    }

    _handleInputChange (e) {
        let { name, value } = e.target
        this.setState({
            [ name ]: value
        })
    }

    _handleSubmit () {
        if (!this.props.onSubmit) return
        const { username, content } = this.state
        if (!username || !content) {
            alert('请填写完整')
            return
        }
        this.props.onSubmit({
            username,
            content: content,
            createdTime: +new Date()
        })
        this.setState({
            content: ''
        })
        this._setContentFocus()
    }

    render () {
        return (
            <div>
                <div>
                    <span>用户名称：</span>
                    <input
                        type="text"
                        name="username"
                        placeholder="用户名称"
                        value={ this.state.username }
                        ref={ input => this.input = input }
                        onBlur={ e => { this._handleInputBlur(e) } }
                        onChange={ e => { this._handleInputChange(e) } }
                        onKeyUp={ e => { e.keyCode === 13 && this._setContentFocus() } }
                    />
                </div>
                <div>
                    <span>评论内容：</span>
                    <input
                        type="text"
                        name="content"
                        placeholder="评论内容"
                        value={ this.state.content }
                        ref={ textarea => this.textarea = textarea }
                        onChange={ e => { this._handleInputChange(e) } }
                        onKeyUp={ e => { e.keyCode === 13 && this._handleSubmit() } }
                    />
                </div>
                <button onClick={ () => { this._handleSubmit() } }>发布</button>
            </div>
        )
    }
}

class Comment extends React.Component {

    // 子组件声明自己需要使用 context
    static contextTypes = {
        _deleteHandler: PropTypes.func
    }

    constructor () {
        super()
        this.state = {
            timeString: ''
        }
    }

    UNSAFE_componentWillMount () {
        this._updateTimeStamp()
        this._timer = setInterval(() => this._updateTimeStamp(), 1000)
    }

    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeStamp () {
        const { info } = this.props
        const duration = (+new Date() - info.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${ Math.round(duration / 60) } 分钟前`
                : `${ Math.round(Math.max(duration, 1)) } 秒前`
        })
    }

    render () {
        const { _deleteHandler } = this.context
        const { username, content, index, } = this.props.info
        return (
            <div>
                <div>{ username }&nbsp;:&nbsp;</div>
                <div dangerouslySetInnerHTML={ { __html: content } }></div>
                &nbsp;-> &nbsp; { this.state.timeString } &nbsp;
                <button onClick={ () => { _deleteHandler(index) } }>删除</button>
                <hr />
            </div>
        )
    }
}

class CommentList extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (<div key={ index + item.username }>
                            <Comment info={ { ...item, index } } />
                        </div>)
                    })
                }
            </div>
        )
    }
}

class BaseLayout extends React.Component {

    // 父组件声明自己支持 context
    static childContextTypes = {
        _deleteHandler: PropTypes.func
    }

    constructor (props, context) {
        super(props, context)
        this.state = {
            commentList: this._loadCommentList()
        }
    }

    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext () {
        return {
            _deleteHandler: (i) => this._deleteHandler(i)
        }
    }

    _saveCommentList () {
        localStorage.setItem('commentList', JSON.stringify(this.state.commentList))
    }

    _loadCommentList () {
        let commentList = JSON.parse(localStorage.getItem('commentList') || '[]')
        // this.setState({ commentList })
        return commentList
    }

    _onSubmitHandle (data) {
        const { commentList } = this.state
        this.setState({
            commentList: [ ...commentList, data ]
        })
    }

    _deleteHandler (i) {
        console.log(i)
        let { commentList } = this.state
        commentList.splice(i, 1)
        this.setState({
            commentList
        })
    }

    render () {
        const { commentList } = this.state
        this._saveCommentList()
        return (
            <Box>
                <CommentInput onSubmit={ (data) => { this._onSubmitHandle(data) } } />
                <CommentList list={ commentList } />
                <button onClick={ () => { this.props.history.push('/login') } }>登录</button>
            </Box>
        )
    }
}

// class BaseLayout extends React.Component {
//     render () {
//         return (
//             <Box>
//                 <NavHeader />
//                 <div className="layout-content">
//                     <SiderBar />
//                     <div className="layout-main-content">

//                     </div>
//                 </div>
//             </Box>
//         )
//     }
// }

export default BaseLayout
