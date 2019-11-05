<<<<<<< HEAD
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
=======
import React from "react";
import Login from '../component/login'
import TodoList from '../component/TodoList'
import Welcome from '../component/Welcome'
import AppRouter from '../AppRouter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/login",
        component: Login
      },
//   {
//     path: "/Home",
//     component: TodoList
//   },
  {
    path: "/Home",
    component: AppRouter,
    routes: [
      {
        path: "/Home/TodoList",
        component: TodoList
      },
      {
        path: "/Home/Welcome",
        component: Welcome
      }
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

 
>>>>>>> 515e792673db655a7dd5639252c410272d6ea39f
