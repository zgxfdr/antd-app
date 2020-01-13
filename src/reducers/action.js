
import { initRecords, addRecords, delRecords,editRecords } from './action-type'
import axios from 'axios'
import FetchRequest from '../utils/request';

// action creators
// 新增
export const addRecordsAsync = (records) => {
  return dispatch => {
    axios.post('http://localhost:3004/records',records).then((res)=>{
          console.log("add success");
          dispatch(addRecords(records))
        })

    // FetchRequest.post('http://localhost:3004/records', records).then(res => {
    //   console.log("add success");
    //   dispatch(addRecords(records))
    // });
  }
}

// 初始化
export const initRecordsAsync = () => {
  return dispatch => {
    FetchRequest.get('http://localhost:3004/records').then(res => {
      if (res) {
        res.map(item => {
          return item.isreadyonly = true;
        })
        let records = res;
        dispatch(initRecords(records))
      }
    })
  }
}

// 删除
export const delRecordsAsync = (index,id) => {
  
  return dispatch => {
    FetchRequest.del(`http://localhost:3004/records/${id}`).then(res => {
      console.log("del success");
      dispatch(delRecords(index))
    });
  }
}

// 编辑
export const editRecordsAsync = (index,id,newState) => {
  
  return dispatch => {
    FetchRequest.put(`http://localhost:3004/records/${id}`, newState).then(res => {
      console.log("put success");
      let records = {
        index:index,
        newState:newState
      }
      dispatch(editRecords(records))
});

  }
}


