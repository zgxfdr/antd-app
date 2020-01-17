import TodoList from '../views/TodoList'
import Login from '../views/Login'
import Echarts from '../components/Echarts'
import Record from '../views/Record'
import HookTest from '../views/HookTest/index1'
const router = [
    {
        path: '/todolist',
        title: "todolist",
        component: TodoList,
        exact: true
    },
    {
        path: '/echarts',
        title: "echarts",
        component: Echarts,
        exact: true
    },
    {
        path: '/record',
        title: "record",
        component: Record,
        exact: true
    },
    {
        path: '/hooktest',
        title: "HookTest",
        component: HookTest,
        exact: true
    }
]

export default router 
