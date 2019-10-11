import React, { Component } from 'react';
import { Link } from "react-router-dom";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
function NumberList(props) {

  const arr = [1, 2, 3];
  return (
    <ul>
      {
        arr.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>
  )
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), counter: 10, list: [
        { cid: 123, title: '技术胖的个人博客-1' },
        { cid: 456, title: '技术胖的个人博客-2' },
        { cid: 789, title: '技术胖的个人博客-3' },
      ]
    };
    this.addCount = this.addCount.bind(this);
  }

  //  在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  addCount() {
    this.setState((state, props) => ({
      counter: parseInt(state.counter) + parseInt(props.increment)
    }));
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) =>
      <li key={index}>{number}</li>
    );
    let html;
    if (this.props.isLoggedIn === 'admin') {
      html = <div><div>I am {this.props.isLoggedIn}</div><h2>It is {this.state.date.toLocaleTimeString()}.</h2></div>
    }
    return (
      <div>
         <ul>
            {
                this.state.list.map((item,index)=>{
                    return (
                        <li key={index}> {item.title} </li>
                    )
                })
            }
        </ul>
        
        
        <NumberList numbers={this.props.numbers} />
        {html}
        <ul>{listItems}</ul>
        <button onClick={this.addCount}>点击我+2</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default Welcome;

