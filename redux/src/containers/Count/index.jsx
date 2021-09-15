import { connect } from 'react-redux'
import { addAction, minusAction, addActionAsync } from '../../redux/actions/count'
import React, { Component } from 'react'

class Count extends Component {
  add = () => {
    const { value } = this.selectNum;
    console.log(this.props)
    this.props.addAction(value * 1)
  }
  minus = () => {
    const { value } = this.selectNum;
    this.props.minusAction(value * 1)
  }
  addJi = () => {
    const { value } = this.selectNum;
    if (this.props.count % 2 != 0) {
      this.props.addAction(value * 1)
    }
  }
  addAsync = () => {
    const { value } = this.selectNum;
    this.props.addActionAsync(value * 1, 500)
  }
  render () {
    return (
      <>
        <h1>{this.props.count}</h1>
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

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = {
  addAction,
  minusAction,
  addActionAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)