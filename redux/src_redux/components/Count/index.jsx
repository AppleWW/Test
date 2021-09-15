import React, { Component } from 'react'
import store from '../../redux/store'
import { addAction, minusAction, addActionAsync } from '../../redux/count_action'

export default class Count extends Component {
  add = () => {
    const { value } = this.selectNum;
    store.dispatch(addAction(value * 1))
  }
  minus = () => {
    const { value } = this.selectNum;
    store.dispatch(minusAction(value * 1))
  }
  addJi = () => {
    const { value } = this.selectNum;
    const num = store.getState();
    if (num % 2 != 0) {
      store.dispatch(addAction(value * 1))
    }
  }
  addAsync = () => {
    const { value } = this.selectNum;
    store.dispatch(addActionAsync(value * 1, 500))
  }
  render () {
    return (
      <>
        <h1>{store.getState()}</h1>
        <select ref={c => this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>加法</button>
        <button onClick={this.minus}>减法</button>
        <button onClick={this.addJi}>奇数加</button>
        <button onClick={this.addAsync}>异步加</button>
      </ >
    )
  }
}
