import React, { Component } from 'react';
import {Button,Input,DatePicker} from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';
class Record extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        // this.editItem = this.editItem.bind(this);
        // this.delItem = this.delItem.bind(this);
    } 
 
    render() {
        return (
            <tr>
                <td>
                   <DatePicker onBlur={()=>{this.props.blurEdit(this.props.index)}}  className={this.props.record.isreadyonly?'no-edit':'can-edit'}  disabled={this.props.record.isreadyonly}  defaultValue={moment(this.props.record.date, dateFormat)} onChange={(date, dateString)=>{this.props.pickerChange(date, dateString,this.props.index)}}  />
                </td> 
                <td> <Input onChange={(e)=>{this.props.titleChange(e,this.props.index)}} onBlur={()=>{this.props.blurEdit(this.props.index)}} className={this.props.record.isreadyonly?'no-edit':'can-edit'} readOnly={this.props.record.isreadyonly} defaultValue={this.props.record.title}/></td>
                <td>
                <span style={{width:'100px',display:'inline-block'}}>
                    <Input onChange={(e)=>{this.props.amountChange(e,this.props.index)}}  onBlur={()=>{this.props.blurEdit(this.props.index)}} className={this.props.record.isreadyonly?'no-edit':'can-edit'} readOnly={this.props.record.isreadyonly} defaultValue={this.props.record.amount}/>
                </span>
                <Button type="primary" style={{marginLeft:'20px'}} onClick={()=>this.props.editItem(this.props.index)}>edit</Button>
                <Button type="danger"  style={{marginLeft:'20px'}} onClick={()=>this.props.delItem(this.props.index)}>del</Button>
                </td>
            </tr>
        );
    }
}

export default Record;