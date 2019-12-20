import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon} from 'antd';
const { SubMenu } = Menu;
class side extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Menu
            className="leftNav"
            style={{ width: 200}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="appstore" />
                        <span>Menu1</span>
                    </span>
                }
            >
                <Menu.Item key="1"><Link to="/Home">todoList</Link> </Menu.Item>
                <Menu.Item key="2"><Link to="/welcome/123">welcome</Link> </Menu.Item>
            </SubMenu>
        </Menu>
        );
    }
}

export default side;