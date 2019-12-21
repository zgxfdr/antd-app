import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './index.css'
import TodoList from '../../component/TodoList/TodoList'
import Echarts from '../../component/Echarts'
import Comment from '../Comment/index.js'
import Storage from '../../model/storage'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
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
                    <div>
                        <Menu
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
                        </Menu>

                    </div>
                    <div className="rightMain">
                        <Switch>
                            <Route path="/todolist" exact component={TodoList} />
                            <Route path="/echart" exact component={Echarts} />
                            <Route path="/comment" exact component={Comment} />
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}



export default App;