import { createStore } from 'redux'
import { counter } from './reducers'

// 根据counter函数创建store对象
const store = createStore(counter) // 内部会第一次调用reducer函数得到初始state
console.log(store.getState())

export default store