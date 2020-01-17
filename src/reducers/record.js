import { INIT_RECOED, ADD_RECOED } from "./action-type";

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
export function records(state = defaultState, action) {

  console.log(state);
  if (action.type === 'ADD_RECOED') { //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))

    newState.records.push(action.records)  //push新的内容到列表中去
    return newState
  }
  else if (action.type === 'INIT_RECOED') {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.records.length > 0) {
      newState.records = [...action.records]  //push新的内容到列表中去
    }

    return newState
  }

  return state

}