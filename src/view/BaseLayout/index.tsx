import * as React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Routers from '@/router/index'
import '@/view/BaseLayout/index.scss'

class BaseLayout extends React.Component {
  router = new Routers().router

  render () {
    return (
      <div className="index-page">
        <Switch>
          {
            this.router.map((item, index) =>
              <Route path={item.path} exact component={item.component} key={index} />
            )
          }
        </Switch>
        <nav>
          <ul>
            <li><Link to="./">index</Link></li>
            <li><Link to="./demo">demo</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default BaseLayout
