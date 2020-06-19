import '@/view/Index/index.scss'
import * as React from 'react'
const HOC = (InnerComponent) => class extends React.Component {
    constructor () {
        super()
        console.log('HOC constructor')
    }
    UNSAFE_componentWillMount () {
        console.log('HOC will mount')
    }
    componentDidMount () {
        console.log('HOC did mount')
    }
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        console.log('HOC should update')
        return true
    }
    UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
        console.log('HOC will update')
    }
    UNSAFE_componentWillReceiveProps () {
        console.log('HOC will ReceiveProps')
    }
    componentDidUpdate (prevProps, prevState) {
        console.log('HOC did update')
    }
    render () {
        console.log('HOC render')
        return (
            <InnerComponent
                { ...this.props }
            />
        )
    }
}

const HOC2 = (InnerComponent) => class extends React.Component {
    constructor () {
        super()
        console.log('HOC2 constructor')
    }
    UNSAFE_componentWillMount () {
        console.log('HOC2 will mount')
    }
    componentDidMount () {
        console.log('HOC2 did mount')
    }
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        console.log('HOC2 should update')
        return true
    }
    UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
        console.log('HOC2 will update')
    }
    UNSAFE_componentWillReceiveProps () {
        console.log('HOC2 will ReceiveProps')
    }
    componentDidUpdate (prevProps, prevState) {
        console.log('HOC2 did update')
    }
    render () {
        console.log('HOC2 render')
        return (
            <InnerComponent
                { ...this.props }
            />
        )
    }
}

class Label extends React.Component {//传统组件
    constructor () {
        super()
        console.log('Label constructor')
    }
    UNSAFE_componentWillMount () {
        console.log('Label will mount')
    }
    componentDidMount () {
        console.log('Label did mount')
    }
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        console.log('Label should update')
        return true
    }
    UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
        console.log('Label will update')
    }
    UNSAFE_componentWillReceiveProps () {
        console.log('Label will ReceiveProps')
    }
    componentDidUpdate (prevProps, prevState) {
        console.log('Label did update')
    }
    render () {
        console.log('Label render')
        return (
            <label>{ this.props.children }</label>
        )
    }

}

Label = HOC(Label)
Label = HOC2(Label)

class Login extends React.Component {//根组件
    constructor () {
        super()
        this.state = {
            text: 'haroro'
        }
        console.log('Login constructor')
    }
    UNSAFE_componentWillMount () {
        console.log('Login will mount')
    }
    componentDidMount () {
        console.log('Login did mount')
    }
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        console.log('Login should update')
        return true
    }
    UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {
        console.log('Login will update')
    }
    UNSAFE_componentWillReceiveProps () {
        console.log('Login will ReceiveProps')
    }
    componentDidUpdate (prevProps, prevState) {
        console.log('Login did update')
    }
    changeState (e) {
        e.stopPropagation()
        this.setState({
            text: 'sunny'
        })
    }
    render () {
        console.log('login render')
        return (
            <div onClick={ (e) => { this.changeState(e) } }>
                <Label data={ this.state.text }>{ this.state.text }</Label>
            </div>
        )
    }
}

export default Login
