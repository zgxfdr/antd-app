// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import CommentApp from './views/CommentApp'
// import commentsReducer from './reducers/comments'
 

// const store = createStore(commentsReducer)

// ReactDOM.render(
//   <Provider store={store}>
//     <CommentApp />
//   </Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base.css'
import App from './App'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
