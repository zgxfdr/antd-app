import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Home from '../Home'
import Storage from '../../model/storage'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          isLogin: true
        })

        Storage.set("isLogin", true);
      }
    });
  };

  render() {
    if (this.state.isLogin) {
      return <Router> <Redirect to="/todolist" /><Route path="/todolist" exact component={Home}></Route>  </Router>
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <h1 className="login-title">Welcome to my House</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
              </Button>
          </Form.Item>
        </Form>
      </div>

    );
  }


}
const WrappedRegistrationForm = Form.create()(Login);

export default WrappedRegistrationForm;