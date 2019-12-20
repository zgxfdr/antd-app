import React, { Component } from './node_modules/react';
import '../../styles/index.css';
import { Checkbox, Row, Col, Input, Icon, Popconfirm, message, Result } from './node_modules/antd';
export default function TodoItem(props) {
    const item = props.todoList;
    const index = props.indexItem;
    return (
        <div>
            <Row gutter={15} key={index} style={{ marginBottom: '15px' }}>
                <Col span={2}>
                    <Checkbox checked={item.checked} onChange={event => { props.changeCheck(event, index) }}></Checkbox>
                </Col>
                <Col span={18}>
                    <div className={item.checked ? 'todo-name todo-complted' : 'todo-name'} onDoubleClick={() => { props.editItem(index) }}>{item.name}</div>
                    <Input onChange={event => { props.changeItemValue(event, index) }} className={props.isEdit && (props.editIndex === index) ? 'todo-edit' : 'hide'} onKeyPress={event => { props.todoListBlur1(event, item.name, index) }} onBlur={event => { props.todoListBlur2(event, item.name, index) }} value={item.name} />
                </Col>
                <Col span={4}>
                    <Popconfirm
                        title="是否删除这项任务?"
                        onConfirm={(event) => { props.confirm(event, index) }}
                        onCancel={props.cancle}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Icon type="delete" title="删除" />
                    </Popconfirm>
                </Col>
            </Row>
        </div>
    )
}