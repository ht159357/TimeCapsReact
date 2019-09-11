import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '@/view/index/index.scss';

class Index extends React.Component {
  render () {
    return (
      <div className="index-page">
        <header className="header-box">
          <span>导航栏</span>
        </header>
      </div>
    )
  }
}

export default Index
