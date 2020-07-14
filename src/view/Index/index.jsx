import '@/view/Index/index.scss'
import * as React from 'react'
// import dataType from '@/utils/dataType'

class Index extends React.Component {
    render () {
        return (
            <div onClick={ () => {
                this.props.history.push({
                    pathname: '/game',
                    state: {
                        from: 'index'
                    }
                })
            } }>
                index
            </div>
        )
    }
}

export default Index
