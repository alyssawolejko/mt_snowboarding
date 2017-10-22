import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import Home from '../../pages/Home'
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

class PageLayout extends React.Component {
  componentDidMount () {
  }
  render () {
    // here we are passing down data and whatever desired redux props
    var childrenWithProps = React.Children.map(this.props.children,
        (child) => React.cloneElement(child, {

        })
    )
    return (
      <MuiThemeProvider>
        <div className='text-center'>
          <div className='page-layout__viewport container'>
            <Home />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const VisiblePageLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout)

export default VisiblePageLayout
