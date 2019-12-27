import React, { Component } from 'react'
import Storage from '../../../model/storage.js';

// 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。
export default (WrappedComponent, name) => {
  class NewComponent extends Component {
   
    componentWillMount () {
      let data = Storage.get(name);
      this.setState({ data })
    }

    render () {
      return <WrappedComponent data={this.state.data} test="hello"/>
    }
  }
  return NewComponent
}