
/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/

import { createStore, applyMiddleware } from 'redux'

// 引入异步组件
import thunk from 'redux-thunk'

// 引入reducer,因为当前只有一个函数,先采用解构方法引入

import { records } from './record'

// 将 reducer作为参数 传入 createStore()方法

const store = createStore(
  records,
  applyMiddleware(thunk), // 使用中间件
)

export default store;
