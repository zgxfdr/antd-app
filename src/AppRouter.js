import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/index.css';
import TodoList from './component/TodoList'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
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
                                <span>TodoList</span>
                            </span>
                        }
                    >
                         <Menu.Item key="1"><Link to="/">Jehadsama</Link> </Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="rightMain">
                    <Route path="/" exact component={TodoList} />
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;