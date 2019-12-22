import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './styles/base.css';
import Login from './views/Login'
import Storage from './model/storage'
import { Menu, Icon } from 'antd';
import TodoList from "./views/TodoList";
import Home from "./views/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  componentDidMount() {
    console.log("---")
    console.log(Storage.get("isLogin"));
    if (Storage.get("isLogin")) {
      this.setState({

        isLogin: false
      })


    } else {
      this.setState({

        isLogin: false
      })
    }
  }

  render() {
    // if (!this.state.isLogin) {
    //   console.log("11")
    //   return <Router> <Redirect to="/login" /><Route path="/login" exact component={Login}></Route>  </Router>
    // }

    return (
      <Router>
        <div>
          <Switch>

            <Route path="/login" component={Login} />
            <Home />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;