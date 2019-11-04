import React from 'react';
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
  }
}

export default App;

 