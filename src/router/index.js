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
    path: "/",
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

export default routes;


