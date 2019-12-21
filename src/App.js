import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/base.css';
import Login from './component/Login'
import Storage from './model/storage'
import { Menu, Icon } from 'antd';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

    if (Storage.get("isLogin")) {

    }
  }

  render() {
    return (
      <Router>

        <div className="mainDiv" >
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;