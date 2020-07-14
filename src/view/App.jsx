import './App.scss'
import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import BaseLayout from '@/view/BaseLayout/index.jsx'
import Login from '@/view/Login/index.jsx'
import Error404 from '@/view/ErrorPages/404'

class App extends React.Component {

    static childContextTypes = {
        globalData: PropTypes.object
    }

    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext () {
        return {
            globalData: { a: 1 }
        }
    }

    state = {
        isLogin: false
    }

    loginStateRedirect () {
        return <Redirect to={ this.state.isLogin ? '/main' : '/login' } />
    }

    render () {
        return (
            <Suspense>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={ () => this.loginStateRedirect() } />
                        <Route path="/login" component={ Login } />
                        <Route path="/main" component={ BaseLayout } />
                        <Route component={ Error404 } />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        )
    }
}

export default App
