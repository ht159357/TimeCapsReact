import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '@/view/App.scss';

// let logo = require('@/assets/img/logo.svg')

function Index () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="header-box">
          <span>导航栏</span>
        </header>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
