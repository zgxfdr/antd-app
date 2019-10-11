import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/index.css';
import Home from './component/Home'
import Welcome from './component/Welcome'
import Form from './component/FormBox'
import Video from './component/Video'
import Workplace from './component/Workplace'
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
                                <span>一级导航</span>
                            </span>
                        }
                    >
                         <Menu.Item key="6"><Link to="/Form">Form表单</Link> </Menu.Item>
                        <Menu.Item key="5"><Link to="/welcome">欢迎页</Link> </Menu.Item>
                        <Menu.Item key="6"><Link to="/">首页</Link> </Menu.Item>
                        <SubMenu key="sub3" title="二级导航">
                            <Menu.Item key="7"><Link to="/video/">视频教程</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/workplace">职场技能</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                </Menu>
                <div className="rightMain">
                    <Route path="/" exact component={Home} />
                    <Route path="/form" component={Form} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/video/"   component={Video} />  
                    <Route path="/workplace/"   component={Workplace} />  
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;