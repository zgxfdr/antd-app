import React from 'react';
<<<<<<< HEAD
import './styles/index.css';
import './App.css';
import MyRoute from './router/index';
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <MyRoute />
      </div>
    )
=======
import Login from './component/login';
import MyRouter from './router/index';
import './App.css';

class App extends React.Component{
  render(){
      return(
          <div id="app">   
           <MyRouter/>
          </div>              
      )
>>>>>>> 515e792673db655a7dd5639252c410272d6ea39f
  }
}

export default App;

