import React, { Component } from 'react';
import { Card, Checkbox, Row, Col,Input,Button, notification,message  } from 'antd';
 const footer = {
     borderTop:'1px solid #ddd'
 }

 const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList:[],
            todoList: [
                { name: "todo1", value: false },
                { name: "todo2", value: false }
            ],
            dothings:""
        };
        this.onChange = this.onChange.bind(this);
        this.addThings = this.addThings.bind(this);
        
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    // 添加list
    addThings(){
        console.log("33")
        if (this.state.dothings) {
            this.state.todoList.push({ checked: false, name: this.state.dothings.trim() });
            this.state.todoList.map((item, index) => {
              item.index = index;
            });
            this.setState({
                todosList:this.state.todoList
            })
            this.filterToDoList(this.chkStatusIndex);
            this.dothings = "";
            openNotificationWithIcon('success')
          } else {
           alert('任务不能为空');
          }
    }

      // 筛选方法
      filterToDoList(index) {
        if (index === 0) {
            this.setState({
                todosList: this.state.todoList
            })
        } else if (index === 1) {
            this.setState({
                todosList: this.state.todoList.filter(item => item.checked === false)
            })
 
        } else {
            this.setState({
                todosList: this.state.todoList.filter(item => item.checked === true)
            })
        }
        this.saveTodoList();
      }
    render() { 
        return (
            <div className="app">
                <div>
                <Input placeholder="Do what you need to do !"  onMouseEnter={this.addThings} defaultValue={this.state.dothings}/>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="todolist" bordered={false} style={{ width: 300 }}>
                        {
                            this.state.todoList.map((item, index) => {
                                return (
                                    <div>
                                        <Checkbox onChange={this.onChange}><span key="{index}">{item.name}</span></Checkbox>
                                    </div>
                                )
                            })

                        }
                        <div className="footer">
                            <Row>
                                <Col span={8}>doing</Col>
                                <Col span={8}>actived</Col>
                                <Col span={8}>completed</Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;