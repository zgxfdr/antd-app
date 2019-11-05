import React from 'react';
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
  }
}

export default App;

