import { addRecordsAsync, initRecordsAsync } from "../../reducers/action.js";

import { connect } from "react-redux";

import Record from './index'


// mapStateTopProps 相当于告知了 Connect 应该如何去 store 里面取数据
const mapStateToProps = (state) => {
  return {
    records: state.records
  }
}

// mapDispatchToProps 告诉connect 需要如何触发 dispatch
const mapDispatchToProps = {
  addRecordsAsync,
  initRecordsAsync
}

// connect   接受一个参数 mapStateToProps，然后返回一个函数，这个返回的函数才是高阶组件
// 它会接受一个组件作为参数，然后用 Connect 把组件包装以后再返回
export default connect(
  mapStateToProps,  // 这个必须是函数
  mapDispatchToProps// 这是个对象 
)(Record)  


