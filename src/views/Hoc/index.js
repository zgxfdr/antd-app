import React, { Component } from 'react';
import Storage from '../../model/storage.js';
import wrapWithLoadData from '../../components/Hoc/wrapWithLoadData'

class InputWithUserName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:""
        };
      }
  
    componentWillMount () {
        let data = Storage.get("isLogin");
        this.setState({ data })
      }
  
  render () {
    return <div>
        <input value={this.state.data} />
    {/* <input value={this.props.data} />
    {this.props.test} */}
</div>
    

  }
}

// 把InputWithUserName组件作为参数传到wrapWithLoadData，再在wrapWithLoadData 返回一个新组件
InputWithUserName = wrapWithLoadData(InputWithUserName, 'isLogin')
export default InputWithUserName