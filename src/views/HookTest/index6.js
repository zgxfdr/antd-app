
import React, { useRef,useState} from 'react';
function Example8(){
    const inputEl = useRef(null)
    const onButtonClick=()=>{ 
        inputEl.current.value="Hello ,JSPang"
        console.log(inputEl) //输出获取到的DOM节点
    }
    const [text, setText] = useState('jspang')
    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <button onClick = {onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default Example8

// import React , {useState,useMemo} from 'react';

// function Example7(){
//     const [xiaohong , setXiaohong] = useState('小红待客状态')
//     const [zhiling , setZhiling] = useState('志玲待客状态')
//     return (
//         <div>
//             <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
//             <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了1')}}>志玲</button>
//             <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
//         </div>
//     )
// }
// export default Example7

// function ChildComponent({name,children}){
//     console.log(children);
//     function changeXiaohong(name){
//         console.log('她来了，她来了。小红向我们走来了')
//         return name+',小红向我们走来了'
//     }

//     // userMemo 优化性能 
//     const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 
//     return (
//         <div>
//             <div>{actionXiaohong}</div>
//             <div>{children}</div>
//         </div>
//     )
// }