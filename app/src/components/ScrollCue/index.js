import React, { Component } from 'react'
import FaAngleDown from 'react-icons/lib/fa/angle-down'

class ScrollCue extends Component {
  render () {
    return (
      <div className="scroll-cue">
        <div>{this.props.text}</div>
        <FaAngleDown className="scroll-cue__arrow" />
      </div>
    )
  }
}

export default ScrollCue
