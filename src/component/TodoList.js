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
            editIndex: 0,
            isEdit: false,
            todoList: [],
            todosList: [],
            dothings: "",
            chkStatusIndex: 0
        };
        this.addThings = this.addThings.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.chkStatus = this.chkStatus.bind(this);
        this.chooseTab = this.chooseTab.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancle = this.cancle.bind(this);
        this.changeCheck = this.changeCheck.bind(this);
        this.editItem = this.editItem.bind(this);
        this.changeItemValue = this.changeItemValue.bind(this);
        this.todoListBlur1 = this.todoListBlur1.bind(this);
        this.todoListBlur2 = this.todoListBlur2.bind(this);


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

    changeItemValue(e, index) {
        console.log(e);
        let dataList = this.state.todoList;
        dataList[index].name = e.target.value;
        this.setState({
            todoList: this.state.todoList
        })
    }


    // enter键编辑框
    todoListBlur1($event, name, index) {
        if ($event.which !== 13) return
        else {
            this.cancleEdit($event, name, index);
        }
    }

    // 取消焦点编辑框
    todoListBlur2($event, name, index) {
        this.cancleEdit($event, name, index);
    }

    // 取消编辑
    async cancleEdit($event, name, index) {
        if (this.state.isEdit) {
            this.setState({
                isEdit: !this.state.isEdit
            })

        }
        await this.state.todoList.map(item => {
            if (item.index === index) {
                item.name = name;
            }
            return item;
        });

        this.setState({
            todoList: this.state.todoList
        })
        Storage.set("todoList", this.state.todoList);
    }



    editItem(index) {
        this.setState({
            isEdit: true,
            editIndex: index
        })
    }
    changeCheck(e, index) {
        let dataList = this.state.todoList;
        dataList[index].checked = e.target.checked;
        if (e.target.checked) {
            message.info('恭喜你完成一项任务啦！再接再厉哦~(づ￣ 3￣)づ');
        }
        this.setState({
            todoList: this.state.todoList
        })

        Storage.set("todoList", this.state.todoList);
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
        console.log(index);
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

        console.log(this.state.todosList);
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
        console.log(index);
        this.setState({
            chkStatusIndex: index
        })

        this.filterToDoList(index);
    }

    chooseTab(key) {
        console.log(typeof key);

        if (key === '1') {
            console.log(key)
            this.chkStatus(0);
        }
        else if (key === '2') {
            this.chkStatus(1);
        }
        else if (key === '3') {
            this.chkStatus(2);
        }
    }

    // 确认删除
    confirm(e, index) {
        this.delItem(index);
    }
    // 取消删除  
    cancle(e) {
        message.error('取消删除');
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
                                {
                                    this.state.todosList.map((item, index) => {
                                        return <TodoItem key={index} changeItemValue={(e) => { this.changeItemValue(e, index) }} editItem={() => { this.editItem(index) }} todoListBlur1={(e) => { this.todoListBlur1(e, index, item.name) }} todoListBlur2={(e) => { this.todoListBlur2(e, index, item.name) }} editIndex={this.state.editIndex} isEdit={this.state.isEdit} confirm={(e) => { this.confirm(e, index) }} changeCheck={(e) => { this.changeCheck(e, index) }} cancle={this.cancle} todoList={item} indexItem={index} ></TodoItem>
                                    })
                                }

                            </TabPane>
                            <TabPane tab="Actived" key="2">
                                {console.log('=====', this.state.todosList, '===')
                                    //     this.state.todosList.map((item, index) => {
                                    //         return <TodoItem key={index} changeItemValue={(e) => { this.changeItemValue(e, index) }} editItem={() => { this.editItem(index) }} todoListBlur1={(e) => { this.todoListBlur1(e, index, item.name) }} todoListBlur2={(e) => { this.todoListBlur2(e, index, item.name) }} editIndex={this.state.editIndex} isEdit={this.state.isEdit} confirm={(e) => { this.confirm(e, index) }} changeCheck={(e) => { this.changeCheck(e, index) }} cancle={this.cancle} todoList={item} indexItem={index} ></TodoItem>
                                    // })
                                }
                            </TabPane>
                            <TabPane tab="Completed" key="3">
                                {
                                    this.state.todosList.map((item, index) => {
                                        return <TodoItem key={index} changeItemValue={(e) => { this.changeItemValue(e, index) }} editItem={() => { this.editItem(index) }} todoListBlur1={(e) => { this.todoListBlur1(e, index, item.name) }} todoListBlur2={(e) => { this.todoListBlur2(e, index, item.name) }} editIndex={this.state.editIndex} isEdit={this.state.isEdit} confirm={(e) => { this.confirm(e, index) }} changeCheck={(e) => { this.changeCheck(e, index) }} cancle={this.cancle} todoList={item} indexItem={index} ></TodoItem>
                                    })
                                }
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;