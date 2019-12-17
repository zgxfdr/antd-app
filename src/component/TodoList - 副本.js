import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import Storage from '../model/storage.js';
import { Card, Row, Col, Input, Button, Tabs, message } from 'antd';
const { TabPane } = Tabs;

// onChange事件传参  onChange={event=>{this.changeCheck(event,index)}}
// 


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            todosList: [],
            dothings: "",
            chkStatusIndex: 0
        };
        this.addThings = this.addThings.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.chkStatus = this.chkStatus.bind(this);
        this.chooseTab = this.chooseTab.bind(this);


    }
    componentDidMount() {
        let dataList = Storage.get("todoList");
        if (dataList) {
            this.setState({
                todoList: dataList,
                todosList: dataList
            })
        }
    }

    // 添加list
    async addThings() {

        if (this.state.dothings) {
            let dataList = [...this.state.todoList, { name: this.state.dothings, checked: false }];
            // 本地存储
            Storage.set("todoList", dataList);
            await this.setState({
                todoList: dataList,
                todosList: dataList,
                dothings: ""
            })
            this.filterToDoList(this.state.chkStatusIndex);
            message.info('添加成功！要及时完成哦，不然要打pp~');
        } else {
            console.log('任务不能为空');
        }
    }

    // 筛选方法
    async  filterToDoList(index) {

        if (index === 0) {
            await this.setState({
                todosList: this.state.todoList
            })
        }
        else if (index === 1) {
            await this.setState({
                todosList: this.state.todoList.filter(item => item.checked === false)
            });
        } else if (index === 2) {
            await this.setState({
                todosList: this.state.todoList.filter(item => item.checked === true)
            });
        }

    }



    // 删除任务
    delItem(index) {
        let list = this.state.todoList;
        list.splice(index, 1);

        this.setState({
            todoList: list
        })
        Storage.set("todoList", list);
        message.info('删除成功');
        this.filterToDoList(this.state.chkStatusIndex);
    }

    changeValue(e) {
        this.setState({
            dothings: e.target.value
        })
    }

    // 切换状态
    chkStatus(index) {
        this.setState({
            chkStatusIndex: index
        })

        this.filterToDoList(index);
    }

    chooseTab(key) {

        if (key === 0) {
            this.chkStatus(0);
        }
        else if (key === 1) {
            this.chkStatus(1);
        }
        else if (key === 2) {
            this.chkStatus(2);
        }
    }
    render() {
        return (
            <div className="todo-container">
                <Row gutter={15} style={{ width: 500 }}>
                    <Col span={20}>
                        <Input type="text" placeholder="Do what you need to do !" name="dothings"
                            onChange={this.changeValue} value={this.state.dothings} />
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.addThings}>添加</Button>
                    </Col>
                </Row>
                <div className="mt20">
                    <Card title="My todoList" bordered={false} style={{ width: 500 }}>
                        <Tabs defaultActiveKey="1" onChange={this.chooseTab}>
                            <TabPane tab="Doing" key="1">
                                <TodoItem todoList={this.state.todosList} delItem={this.delItem.bind(this)} ></TodoItem>
                            </TabPane>
                            <TabPane tab="Actived" key="2">
                                <TodoItem todoList={this.state.todosList} delItem={this.delItem.bind(this)} ></TodoItem>
                            </TabPane>
                            <TabPane tab="Completed" key="3">
                                <TodoItem todoList={this.state.todosList} delItem={this.delItem.bind(this)} ></TodoItem>
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;