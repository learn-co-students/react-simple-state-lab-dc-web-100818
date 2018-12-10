import React, { Component } from 'react'

export default class Cell extends Component {

  constructor(props){
    super(props)
      this.state = {
        color: props.value
      }
  }

  clickHandler = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render() {
    return(
      <div
        onClick={this.clickHandler}
        className="cell"
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}
