import * as React from 'react'
import '@/view/Game/index.scss'

class Game extends React.Component { 
    UNSAFE_componentWillMount () {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                页面来源：{this.props.location.state && this.props.location.state.from}
            </div>
        )
    }
}

export default Game
