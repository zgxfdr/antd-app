
import { initRecords, addRecords } from './action-type'
import FetchRequest from '../utils/request';

// action creators
export const addRecordsAsync = (records) => {
  return dispatch => {
    FetchRequest.post('http://localhost:3004/records', records).then(res => {
      console.log("add success");
      console.log(records);
      dispatch(addRecords(records))
    });
  }
}

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


