import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'

import App from './components/app'



// 定义渲染根组件标签的函数
const render = () => {
  ReactDOM.render(
    <App store={store}/>, // 将 store 传入组件
    document.getElementById('root')
  )
}
// 初始化渲染
render()

// 注册(订阅)监听, 一旦状态发生改变, 自动重新执行渲染函数
// 如果没有调用它，则只是store的state发生了改变，但是视图不会更新
store.subscribe(render)


