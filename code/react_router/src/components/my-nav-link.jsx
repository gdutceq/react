import React from 'react'
import {NavLink} from 'react-router-dom'

// 工厂函数组件（简单组件：没有状态的组件）
export default function MyNavLink(props) {
  // 不是类组件了，不能写 this.props
  return <NavLink {...props} activeClassName='activeClass'/>
}