import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './index.css'
import TodoList from '../../views/TodoList'
import Echarts from '../../components/Echarts'
import Login from '../../views/Login'
import Comment from '../Comment/index.js'
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
                        </Menu>
                        {/* <Menu
                            className="leftNav"
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >

                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>Home</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to="/todolist">todoList</Link> </Menu.Item>
                                <Menu.Item key="2"><Link to="/echart">echart</Link> </Menu.Item>
                                <Menu.Item key="3"><Link to="/comment">comment</Link> </Menu.Item>
                            </SubMenu>
                        </Menu> */}

                    </div>
                    <div className="rightMain">
                        {
                            router.map((route, index) => {
                                // return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                                return <Route key={index} path={route.path} />
                            })
                        }
                        <Switch>
                            <Route path="/todolist" exact component={TodoList} />
                            <Route path="/echart" exact component={Echarts} />
                            <Route path="/comment" exact component={Comment} />
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