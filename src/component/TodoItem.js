import React, { Component } from 'react';
import Storage from '../model/storage.js';
import '../styles/index.css';
import { Checkbox, Row, Col, Input, Icon, Popconfirm, message,Result } from 'antd';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someThings: props.todoList,
            isEdit: false,
            editIndex: 0
        };
        this.changeCheck = this.changeCheck.bind(this);
        this.editItem = this.editItem.bind(this);
        this.todoListBlur1 = this.todoListBlur1.bind(this);
        this.todoListBlur2 = this.todoListBlur2.bind(this);
        this.changeItemValue = this.changeItemValue.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);


    }

    // 把props转为自己的state
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({ someThings: nextProps.todoList });
    }

    // 选择框
    changeCheck(e, index) {
        let dataList = this.state.someThings;
        dataList[index].checked = e.target.checked;
        if(e.target.checked){
            message.info('恭喜你完成一项任务啦！再接再厉哦~(づ￣ 3￣)づ');
        }
        this.setState({
            someThings: this.state.someThings
        })
        
        Storage.set("todoList", this.state.someThings);
    }

    // 编辑item的文本框
    changeItemValue(e, index) {
        console.log(e);
        let dataList = this.state.someThings;
        dataList[index].name = e.target.value;
        this.setState({
            someThings: this.state.someThings
        })
    }

    // 点击编辑item
    editItem(index) {
        this.setState({
            isEdit: true,
            editIndex: index
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
        await this.state.someThings.map(item => {
            if (item.index === index) {
                item.name = name;
            }
            return item;
        });

        this.setState({
            someThings: this.state.someThings
        })
        Storage.set("todoList", this.state.someThings);
    }

    // 确认删除
    confirm(e, index) {
        this.props.delItem(index);
    }
    // 取消删除  
    cancel(e) {
        message.error('取消删除');
    }

    renderHtml() {

        if (this.state.someThings.length === 0) {
            return (
                <Row>
                    <Col>
                        <Result
                            icon={<Icon type="smile" theme="twoTone" />}
                            title="快去添加任务吧~"
                        />
                    </Col>
                </Row>
            )
        } else {
            return (
                this.state.someThings.map((item, index) => {
                    return (
                        <Row gutter={15} key={index} style={{ marginBottom: '15px' }}>
                            <Col span={2}>
                                <Checkbox checked={item.checked} onChange={event => { this.changeCheck(event, index) }}></Checkbox>
                            </Col>
                            <Col span={18}>
                                <div className={item.checked ? 'todo-name todo-complted' : 'todo-name'} onDoubleClick={() => { this.editItem(index) }}>{item.name}</div>
                                <Input onChange={event => { this.changeItemValue(event, index) }} className={this.state.isEdit && (this.state.editIndex === index) ? 'todo-edit' : 'hide'} onKeyPress={event => { this.todoListBlur1(event, item.name, index) }} onBlur={event => { this.todoListBlur2(event, item.name, index) }} value={item.name} />
                            </Col>
                            <Col span={4}>
                                <Popconfirm
                                    title="是否删除这项任务?"
                                    onConfirm={(event) => { this.confirm(event, index) }}
                                    onCancel={this.cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Icon type="delete" title="删除" />
                                </Popconfirm>
                            </Col>
                        </Row>
                    )
                })

            )
        }
    }
    render() {

        return (
            <div>
                {this.renderHtml()}
            </div>
        );
    }
}

export default TodoItem;