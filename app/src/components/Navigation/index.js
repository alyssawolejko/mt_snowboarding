import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaInstagram from 'react-icons/lib/fa/instagram'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navSticky: this.props.isSticky ? 'nav--sticky' : 'nav'
    }
  }
  componentDidMount() {
    this.setState({
      navSticky: this.props.isSticky ? 'nav--sticky' : 'nav'
    })
  }
  render () {
    return (
      <div className="nav__wrapper">
        <nav className={this.state.navSticky}>
          <a href="google.com">
            <FaFacebook />
          </a>
          <a href="google.com">
            <FaInstagram />
          </a>
          <a href="https://www.gofundme.com/39i6sw" className="nav__logo">
            <img src={require('../../assets/go-fund-me.png')}/>
          </a>
        </nav>
      </div>
    )
  }
}

export default Navigation
