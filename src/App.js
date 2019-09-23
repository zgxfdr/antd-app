import React, { Component } from 'react';
import { Button,Breadcrumb } from 'antd';
import Welcome from './component/Welcome.js' 
 
import './App.css';
function App() {
  return (
   <div>
     <Welcome isLoggedIn="admin" increment="2" numbers="[3,2,1]"/>
   </div>
  );
}



export default App;

 