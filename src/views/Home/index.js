import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './index.css'
import TodoList from '../../views/TodoList'
import Echarts from '../../components/Echarts'
import Login from '../../views/Login'
import Record from '../../views/Record'
import HookTest from '../HookTest/index'
import Storage from '../../model/storage'
import router from '../../router'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }


    render() {
        let html;
        if (Storage.get("isLogin")) {
            html = (

                <div className="mainDiv" >
                    <div>
                        <Menu
                            className="leftNav"
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            {
                                router.map((item, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </Menu.Item>)
                                })
                            }
                        </Menu> }

                    </div>
                    <div className="rightMain">
                        {
                            router.map((route, index) => {
                                return <Route key={index} path={route.path} />
                            })
                        }
                        <Switch>
                            <Route path="/todolist" exact component={TodoList} />
                            <Route path="/echart" exact component={Echarts} />
                            {/* <Route path="/record" exact component={Record} /> */}
                            <Route path="/HookTest" exact component={HookTest} />
                        </Switch>

                    </div>
                </div>


            )
        } else {
            html = (

                <div>
                    <Redirect to="/login" />
                    <Switch><Route path="/login" exact component={Login} /></Switch>
                </div>

            )
        }
        return (

            <Router>
                {html}
            </Router>
        );
    }
}



export default App;