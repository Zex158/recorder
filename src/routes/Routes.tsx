import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import App from '@/pages/App/App'
import Login from '@/pages/Login/Login'
import store from '@/store/Index'
import history from '@/store/History'

class Routes extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
          </>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Routes
