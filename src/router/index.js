import TodoList from '../views/TodoList'
import Login from '../views/Login'
import Echarts from '../components/Echarts'
import Record from '../views/Record'
import Hoc from '../views/Hoc'
const router = [
    {
        path: '/',
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
        path: '/hoc',
        title: "hoc",
        component: Hoc,
        exact: true
    }
]

export default router 
