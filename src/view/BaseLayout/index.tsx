import * as React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Index from '@/view/Index/index'
import Demo from '@/view/Demo/index'
import Error404 from '@/view/ErrorPages/404'
import '@/view/BaseLayout/index.scss'

class BaseLayout extends React.Component {
  router = [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'demo',
      path: '/demo',
      component: Demo
    },
    {
      name: '404',
      path: '',
      component: Error404
    }
  ]
  render () {
    return (
      <div className="index-page">
        <Switch>
          {
            this.router.map((item) =>
              <Route path={item.path} exact component={item.component} />
            )
          }
        </Switch>
        <nav>
          <ul>
            <li><Link to="./">Index</Link></li>
            <li><Link to="./demo">Demo</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default BaseLayout
