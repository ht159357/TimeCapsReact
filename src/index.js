import '@/index.scss'
import '@/assets/css/reset.scss'
import 'lib-flexible'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from '@/serviceWorker'
import App from '@/view/App'

ReactDOM.render(<App />, document.getElementById('root'))

process.env.NODE_ENV === 'development'
  ? serviceWorker.unregister()
  : serviceWorker.register()
