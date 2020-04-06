import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from '@/store/Index'
import history from '@/store/History'
import Routes from '@/routes/Routes'
import { init } from '@/utils/httpErrorHandler'
import { initApp } from './initApp'
class App extends React.Component<any, any> {
  state = {
    init: false,
    appinfo: null,
    errorInfo: null,
    authentication: null,
  }
  cache: any = {}

  async componentDidMount() {
    init()

    await initApp(this.saveAppData, this.saveUserData)

    this.setState({ init: true, authentication: this.cache.authentication || null })
  }
  saveAppData = (data: any) => {
    this.saveData(data)
  }
  saveUserData = (data: any) => {
    this.saveData(data)
  }
  saveData = (data: any) => {
    let item
    if (typeof data === 'object') {
      Object.keys(data).map((key) => {
        item = data[key]
        if (!item[0] && item[1].success) {
          this.cache[key] = item[1].data
        }
      })
    }
  }
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.state.init ? <Routes authentication={this.state.authentication} /> : <div>init </div>}
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
