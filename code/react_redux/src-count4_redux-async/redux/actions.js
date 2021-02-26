/*
action creator模块
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'

export const increment = number => ({type: INCREMENT, number})

export const decrement = number => ({type: DECREMENT, number})

// 异步action creator(返回一个函数)
export const incrementAsync = number => {
  return dispatch => {
    setTimeout(() => {
      // x相当于1s之后才去分发 action
      dispatch(increment(number))
    }, 1000)
  }
}