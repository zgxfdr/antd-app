import React, { Component } from 'react';
import { Checkbox, Button,Row,Col,Input  } from 'antd';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick(index) {
        this.props.delItem(index);
    }
    render() {
        return (
            this.props.todoList.map((item, index) => {
                return (
                    <Row gutter={15} key={index}>
                        <Col span={2}>
                            <Checkbox onChange={this.changeCheck}></Checkbox>
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