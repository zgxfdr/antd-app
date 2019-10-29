import React, { Component } from 'react';
import Storage from '../model/storage.js';
import { Checkbox, Button,Row,Col,Input  } from 'antd';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changeCheck = this.changeCheck.bind(this);
    }
    handleClick(index) {
        this.props.delItem(index);
    }
    changeCheck(index) {
        console.log(index)
       this.props.todoList[index].checked = !this.props.todoList[index].checked;
       this.setState({
        todoList:this.props.todoList
       })
      // Storage.set("todoList",this.props.todoList);
    }
    render() {
        return (
            this.props.todoList.map((item, index) => {
                return (
                    <Row gutter={15} key={index}>
                        <Col span={2}>
                            <Checkbox onChange={()=>{this.changeCheck(index)}}></Checkbox>
                        </Col>
                        <Col span={15}>
                            <div>{item.name}</div>
                            {/* <Input value={item.name}/> */}
                        </Col>
                        <Col span={4}>
                            <Button onClick={() => { this.handleClick(index) }}>删除</Button>
                        </Col>
                    </Row>

                )
            })
        );
    }
}

export default TodoItem;