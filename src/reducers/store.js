
/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/

import { createStore, applyMiddleware } from 'redux'

// 引入异步组件
import thunk from 'redux-thunk'

// 引入reducer,因为当前只有一个函数,先采用解构方法引入

import { reducer } from './reducer'

// 将 reducer作为参数 传入 createStore()方法

const store = createStore(
<<<<<<< HEAD
  reducer,
  applyMiddleware(thunk) // 使用中间件
=======
  records,
  applyMiddleware(thunk), // 使用中间件
>>>>>>> 309521e0a337b7e732b389ff9f3de50faf16e7c7
)

export default store;
