import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appStore from '../redux/reducers'
import Home from '../pages/Home'
import VisiblePageLayout from '../redux/containers/PageLayout'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import '../styles/main.css'

const history = createBrowserHistory()
const store = createStore(appStore, applyMiddleware(thunk))

class App extends React.Component {
  render () {
    // injectTapEventPlugin()
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={VisiblePageLayout} />
        </Router>
      </Provider>
    )
  }
}

export default App
