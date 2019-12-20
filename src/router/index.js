import React from "react";
import Login from '../component/login'
import TodoList from '../component/todoList/TodoList'
import Welcome from '../component/Welcome'
import AppRouter from '../AppRouter'
import NotFound from '../component/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
    name: "Login",
    component: Login,
    auth: true
  },

  {
    path: "/",
    component: AppRouter,
    routes: [
      {
        path: "/TodoList",
        name: "TodoList",
        component: TodoList,
        auth: true
      },
      {
        path: "/Welcome",
        name: "Welcome",
        component: Welcome,
        auth: true
      }
    ]
  }
];


export default function RouteConfigExample(props) {
  let token = true;
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/welcome" component={Welcome} />} />

        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/login" component={Login} />
          <Redirect path="/welcome" to="/" />
        </Switch>

        {/* <Switch>
          {routes.map((item, index) => {
            return <Route key={index} path={item.path} exact render={props =>
              (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />)
              )} />
          })}
          <Route component={NotFound} />
        </Switch> */}

        {/* <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch> */}
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

