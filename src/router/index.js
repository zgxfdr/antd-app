import TodoList from '../views/TodoList'
import Login from '../views/Login'
import Echarts from '../components/Echarts'
import Comment from '../views/Comment'
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
        path: '/comment',
        title: "comment",
        component: Comment,
        exact: true
    }
]

export default router 
