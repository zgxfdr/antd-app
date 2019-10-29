import React, { Component } from 'react';
import { Card, Checkbox, Row, Col, Input, Button, notification, message } from 'antd';
const footer = {
    borderTop: '1px solid #ddd'
}

// 点击事件传参


const openNotificationWithIcon = type => {
    notification[type]({
        message: '添加成功'
    });
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            dothings: "",
            chkStatusIndex: 0
        };
        this.changeCheck = this.changeCheck.bind(this);
        this.addThings = this.addThings.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.chkStatus = this.chkStatus.bind(this);


    }
    // componentDidMount() {
    //     this.setState({
    //         todoList: JSON.parse(localStorage.getItem("todoList")) || []
    //     })

    //     console.log(this.state.todoList)
    //     if (this.state.todoList) {
    //         this.setState({
    //             todosList: this.state.todoList
    //         })

    //     }
    // }
    changeCheck(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    // 存储任务
    saveTodoList() {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList"))
        })

    }
    // 添加list
    addThings() {

        if (this.state.dothings) {
            let a = [];
            let b = [...a, { name: "wx", checked: false }];
            console.log(b);
            this.setState(function (state, props) {
                console.log(state);
                return {
                   todoList: [...state.todoList,state.dothings ],
                 //    todoList:state.todoList.push({ name: state.dothings, checked: false }),
                    dothings: ""
                };
            });

            setTimeout(() => {
                console.log(this.state.todoList);
                this.setState({

                })
            }, 1000);
            // this.setState((prevState) => {
            //     console.log(prevState);
            //     return {todoList: prevState.todoList.push({name:this.state.dothings,checked:false})}
            //   });

            this.filterToDoList(this.state.chkStatusIndex);
            openNotificationWithIcon('success')
        } else {
            console.log('任务不能为空');
        }
    }

    // 筛选方法
    filterToDoList(index) {
        if (index === 0) {
            this.setState(function (state, props) {
                return {
                    todoList: state.todoList
                };
            });

        }
        else if (index === 1) {
            this.setState(function (state, props) {
                console.log(state);
                console.log(state.todoList.filter(item => item.checked === false))
                return {
                    todoList: state.todoList.filter(item => item.checked === false)
                };
            });


        } else if (index === 2) {
            let arr2 = this.state.todoList.filter(item => item.checked === true);
            console.log(arr2);
            this.setState({
                todoList: arr2
            })
        }


        //  this.saveTodoList();
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
    render() {
        return (
            <div className="app">
                <div>
                    <Row gutter={15}>
                        <Col span={15}>
                            <Input type="text" placeholder="Do what you need to do !" name="dothings"
                                onChange={this.changeValue} value={this.state.dothings} />
                        </Col>
                        <Col span={6}>
                            <Button type="primary" onClick={this.addThings}>添加</Button>
                        </Col>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px', margin: '20px 0' }}>
 
                    <Card title="todolist" bordered={false} style={{ width: 300 }}>
                        {
                             this.state.todoList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Checkbox onChange={this.changeCheck}><span>{item.name}</span></Checkbox>
                                        <span>{item}</span>
                                    </div>
                                )
                            })

                        }
                        <div className="footer">
                            <Row>
                                <Col span={8}>   <Button type="default" onClick={() => { this.chkStatus(0) }}>doing</Button></Col>
                                <Col span={8}>   <Button type="default" onClick={() => { this.chkStatus(1) }}>actived</Button></Col>
                                <Col span={8}>   <Button type="default" onClick={() => { this.chkStatus(2) }}>completed</Button></Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;