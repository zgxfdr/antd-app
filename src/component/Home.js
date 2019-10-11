import React, { Component } from 'react';
import { Card, Checkbox, Row, Col } from 'antd';
 const footer = {
     borderTop:'1px solid #ddd'
 }
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { name: "todo1", value: false },
                { name: "todo2", value: false }
            ]
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        return (
            <div className="app">
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