import React, { Component } from 'react';
import {Button,Input,DatePicker} from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';
// 无状态组件 提高性能
const Record = (props)=>{
    return (
        <tr>
            <td>
               <DatePicker onBlur={()=>{props.blurEdit(props.index)}}  className={props.record.isreadyonly?'no-edit':'can-edit'}  disabled={props.record.isreadyonly}  defaultValue={moment(props.record.date, dateFormat)} onChange={(date, dateString)=>{props.pickerChange(date, dateString,props.index)}}  />
            </td> 
            <td> <Input onChange={(e)=>{props.titleChange(e,props.index)}} onBlur={()=>{props.blurEdit(props.index)}} className={props.record.isreadyonly?'no-edit':'can-edit'} readOnly={props.record.isreadyonly} defaultValue={props.record.title}/></td>
            <td>
            <span style={{width:'100px',display:'inline-block'}}>
                <Input onChange={(e)=>{props.amountChange(e,props.index)}}  onBlur={()=>{props.blurEdit(props.index)}} className={props.record.isreadyonly?'no-edit':'can-edit'} readOnly={props.record.isreadyonly} defaultValue={props.record.amount}/>
            </span>
            <Button type="primary" style={{marginLeft:'20px'}} onClick={()=>props.editItem(props.index)}>edit</Button>
            <Button type="danger"  style={{marginLeft:'20px'}} onClick={()=>props.delItem(props.index)}>del</Button>
            </td>
        </tr>
    );
}
export default Record;