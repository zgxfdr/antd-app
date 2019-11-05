import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Login from '../component/login/index'
import Welcome from '../component/Welcome'
import TodoList from '../component/TodoList'
import AppRouter from '../AppRouter'

export default class MyRoute extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Route exact path='/' component={Login} />
                <AppRouter path='/View' component={AppRouter}>
                    <Route path='/View/welcome' component={Welcome} />
                    <Route path='/View/todolist' component={TodoList} />
                </AppRouter>
            </Router>
        )
    }
}
