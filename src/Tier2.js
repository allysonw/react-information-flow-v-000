import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

 componentWillReceiveProps = (nextProps) => {
    this.setState({
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color),
    });
  }

  changeChildrenColor = (e) => {
    e.stopPropagation();

    this.setState({
      childColor: getRandomColor()
    });
  }

  render() {
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.changeChildrenColor} />
        <Tier3 color={this.state.childColor} handleChildClick={this.changeChildrenColor} />
      </div>
    )
  }
}
