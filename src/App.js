import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './styles/base.css';
import Login from './views/Login'
import Storage from './model/storage'
import { Menu, Icon } from 'antd';
import Home from "./views/Home";
import RecordConnect from "./views/Record/connect";
import { Provider } from 'react-redux';
import store from './reducers/store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  componentDidMount() {
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
            {/* Provider是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store了，这也是React-redux的核心组件了 */}
            {/* <Provider store={store}><RecordConnect /></Provider>   */}
          <Home/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;