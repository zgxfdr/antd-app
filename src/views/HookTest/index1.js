import React, { useState } from 'react';

// useState 不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序
// const {状态值，函数} = userState(初始值)
// 每次状态（State）更新时执行，它为我们准备了useEffect

let showSex = true
function Example2(){
    const [ age , setAge ] = useState(18)
    const [ sex , setSex ] = useState('男')

    const [ work , setWork ] = useState('前端程序员')
    return (
        <div>
            <p>JSPang 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>

        </div>
    )
}
export default Example2;