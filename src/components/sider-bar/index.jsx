import * as React from 'react';
import './index.scss';

class Index extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            users: [
                { username: '弗丁', age: 21 },
                { username: '月影', age: 25 },
                { username: '怒风', age: 27 },
            ]
        }
    }

    render () {
        const { users } = this.state
        return (
            <div className="sider-bar">
                {
                    users.map((item, key) => {
                        return <div key={ key + item.username }>{ key }, { item.username } - { item.age }</div>
                    })
                }
            </div>
        )
    }
}

export default Index
