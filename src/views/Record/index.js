import React, { Component } from 'react';
import List from '../../components/Record/List'
// import Hoc from '../../views/Hoc'
import FetchRequest from '../../utils/request';
import PropTypes from 'prop-types'
import store from '../../reducers/store'
import './index.css'
import { Row, Col, Card, Input, Button, DatePicker } from 'antd';
class Record extends Component {
    static propTypes = {
        records: PropTypes.array,
        addRecordsAsync: PropTypes.func.isRequired,
        initRecordsAsync: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = store.getState();
        console.log(this.state)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态



    }
    storeChange() {
        this.setState(store.getState())
        this.getCounts();
    }

    UNSAFE_componentWillMount() {
        this.getPage();
    }

    // 获取列表
    async  getPage() {
        await this.props.initRecordsAsync();
        setTimeout(() => {
            this.getCounts();
        }, 1000)

    }

    // 计算
    getCounts() {
        let income = 0;
        let expenditure = 0;


        this.state.records.map((item) => {
            if (item.amount) {
                if (parseFloat(item.amount) > 0) {
                    income += parseFloat(item.amount);
                } else {
                    expenditure += parseFloat(item.amount);
                }
            }

        })
        this.setState({
            income: income,
            expenditure: expenditure,
            balance: income + expenditure
        })
    }

    // 编辑
    editItem(index) {
        let records = this.state.records;
        records[index].isreadyonly = false;
        this.setState({
            records: records
        })
    }

    // 删除
    delItem(index) {

        let id = this.state.records[index].id;

        FetchRequest.del(`http://localhost:3004/records/${id}`).then(res => {
            console.log("del success");
            this.getPage();
            this.getCounts();

        });
    }
    // 失去焦点
    blurEdit(index) {
        let blureditId = this.state.records[index].id;
        console.log(this.state.records[index]);

        FetchRequest.put(`http://localhost:3004/records/${blureditId}`, this.state.records[index]).then(res => {
            console.log("put success");
            this.getPage();
            this.getCounts();

        });
    }



    // 新增
    async addAmount() {
        let form = this.state.form;
        form.id = this.props.records.length + 1;
        await this.props.addRecordsAsync(form);


    }
    pickerChange(date, dateString) {
        this.setState({
            form: {
                date: dateString,
                amount: this.state.form.amount,
                title: this.state.form.title
            }
        })

    }

    // 监听修改的date
    pickerChange1(date, dateString, index) {
        let records3 = this.state.records;
        records3[index].date = dateString;
        this.setState({
            records: records3
        })
    }

    titleChange(e) {
        this.setState({
            form: {
                date: this.state.form.date,
                amount: this.state.form.amount,
                title: e.target.value
            }
        })

    }
    // 监听修改的title
    titleChange1(e, index) {
        let records1 = this.state.records;
        records1[index].title = e.target.value;
        this.setState({
            records: records1
        })
    }

    // 监听修改的amount
    amountChange1(e, index) {
        let records2 = this.state.records;
        records2[index].amount = e.target.value;
        this.setState({
            records: records2
        })
    }
    amountChange(e) {
        this.setState({
            form: {
                date: this.state.form.date,
                title: this.state.form.title,
                amount: e.target.value
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="record-container">

                <div style={{ background: '#ECECEC', padding: '30px', marginBottom: '20px' }}>
                    <Row type="flex" justify="space-around" className="record-card">
                        <Col span={7}>
                            <Card title="收入" bordered={false} >
                                <p>{this.state.income}元</p>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card title="支出" bordered={false}>
                                <p>{this.state.expenditure}元</p>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card title="结余" bordered={false}>
                                <p>{this.state.balance}元</p>
                            </Card></Col>
                    </Row>
                </div>
                <div className="form-box">
                    <DatePicker onChange={this.pickerChange.bind(this)} className="item" />
                    <Input placeholder="title" onChange={this.titleChange.bind(this)} defaultValue={this.state.form.title} style={{ width: '300px' }} className="item" />
                    <Input placeholder="amount" onChange={this.amountChange.bind(this)} defaultValue={this.state.form.amount} style={{ width: '300px' }} className="item" />
                    <Button type="primary" onClick={this.addAmount.bind(this)}>新增</Button>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>title</th>
                            <th>amount</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            this.state.records && this.state.records.map((record, i) => {
                                return <List blurEdit={this.blurEdit.bind(this)} pickerChange={this.pickerChange1.bind(this)} titleChange={this.titleChange1.bind(this)} amountChange={this.amountChange1.bind(this)} record={record} key={i} index={i} editItem={this.editItem.bind(this)} delItem={this.delItem.bind(this)} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Record;