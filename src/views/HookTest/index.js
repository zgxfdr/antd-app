import React, { useState, useEffect, useContext, createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
const CountContext = createContext()
const ColorText = createContext()
export const CHANGE = "CHANGE"
 
function Test() {
    const [count,addCount] = useState(0);
    const [sex] = useState(22)
    const [count1,addCount1] = useState(count)

 
    useEffect(() => {
        console.log("肥家啦~");
    })
    return (

        <div>
            <Color>
                <ShowColor />
            </Color>
            <button onClick={() => { addCount1(count1 + 2) }}>点我+2</button>
            <p>距离回家还有{count1}天</p>
            <p>距离回家还有{count}天</p>
            <p>今年{sex}岁</p>
            <button onClick={() => { addCount(count + 1) }}>点我+1</button>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default Test;

function Color(props) {
 
    return (
        <ColorText.Provider value={{ color: 'red', mood: 'happy' }}>
            {props.children}
        </ColorText.Provider>
    )
}
function ShowColor() {
    const { color, mood } = useContext(ColorText);
  
    return (
        <div>
            
            <div style={{color:color}}>I am {color}</div>
            <div>I am so {mood}</div>
        </div>
    )
}

 
function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
    }, [])
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    }, [])

    return <h2>List-Page</h2>;
}