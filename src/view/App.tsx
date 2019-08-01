import * as React from 'react'
import { BrowserRouter } from "react-router-dom"
import BaseLayout from '@/view/BaseLayout/index'
import './App.scss'

// let logo = require('@/assets/img/logo.svg')

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <BaseLayout />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
