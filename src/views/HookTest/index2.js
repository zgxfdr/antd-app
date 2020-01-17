import React, { useState , useEffect } from 'react';


//用useEffect函数代替生命周期函数
// React首次渲染和之后的每次渲染都会调用一遍useEffect函数,
// 而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)



function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export default Example;
// import React, { Component } from 'react';

// class Example3 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }


//     componentDidMount(){
//         console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//     }

//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

// export default Example3;