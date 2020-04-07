import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from '@/pages/App/App'
import Login from '@/pages/Login/Login'
import store from '@/store/Index'
import history from '@/store/History'
import { initAuthentication } from '@/actions/authority/authority'
import { push } from 'connected-react-router'
class Routes extends React.Component<any, any> {
  state = {
    authentication: this.props.authentication,
  }

  componentDidMount() {
    store.dispatch(initAuthentication(this.props.authentication))

    if (!this.props.authentication.logined) {
      store.dispatch(push('/login'))
    }

    history.listen((location, action) => {
      if (location.pathname !== '/login' && !this.props.authentication.logined) {
        store.dispatch(push('/login'))
      }
    })
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.props.authentication.logined ? (
            <Route exact path="/" component={App} />
          ) : (
            <Route path="/login" component={Login} />
          )}
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Routes
