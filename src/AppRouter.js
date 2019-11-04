import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/index.css';
import TodoList from './component/TodoList'
import Welcome from './component/Welcome'
import Storage from './model/storage'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
     
           if(Storage.get("isLogin")){
             
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
                                        <span>TodoList</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to="/Home">todoList</Link> </Menu.Item>
                                <Menu.Item key="2"><Link to="/welcome/123">welcome</Link> </Menu.Item>
                            </SubMenu>
                            {/* <div className="menu-bottom">
                                <Link to="/">退出登录</Link>
                            </div> */}
                        </Menu>
    
                    </div>
                    <div className="rightMain">
                        <Route path="/Home" exact component={TodoList} />
                        <Route path="/welcome/:id"  component={Welcome} />
                     
                    </div>
                </div>
            </Router>
        );
    }
}

 

export default AppRouter;