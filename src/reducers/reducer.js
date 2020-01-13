import { INIT_RECOED, ADD_RECOED,DEL_RECOED } from "./action-type";

let defaultState = {
  records: [],
  income: "",// 收入
  expenditure: "",// 支出
  balance: "",// 结余  
  form: {
    title: "",
    amount: "",
    date: null
  }

}
// 必须是纯函数
export function reducer(state = defaultState, action) {

  console.log(state);
  // state值只能传递，不能被改变 所以要重新定义新变量
  if (action.type === 'ADD_RECOED') {  
    let newState = JSON.parse(JSON.stringify(state))
    newState.records.push(action.records)  
    return newState
  }
  else if (action.type === 'INIT_RECOED') {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.records.length > 0) {
      newState.records = [...action.records]  
    }
    return newState
  }
  else if (action.type === 'DEL_RECOED') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.records.splice(action.index,1);
    return newState
  }
  else if (action.type === 'EDIT_RECOED') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.records[action.records.index] = action.records.newState;
    return newState
  }


  return state

}