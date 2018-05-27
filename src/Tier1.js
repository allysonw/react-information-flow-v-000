import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  changeChildrenColor = (e) => {
    e.stopPropagation();

    this.setState({
      childColor: getRandomColor()
    });
  }

  changeColor = () => {
    const newColor = getRandomColor();

    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  render() {
    return (
      <div onClick={this.changeColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={this.changeChildrenColor} color={this.state.childColor} />
        <Tier2 handleChildClick={this.changeChildrenColor} color={this.state.childColor} />
      </div>
    )
  }
}
