import React, { Component } from 'react';
import Cell from './Cell.js'
let counter = 1

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell key={counter++} value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div key={counter++} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}
  Matrix.defaultProps = {
    values: Array(10).fill(Array(10).fill('#F00'))
}
