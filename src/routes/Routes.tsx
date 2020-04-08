import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import App from '@/pages/App/App'
import Login from '@/pages/Login/Login'
import { push } from 'connected-react-router'
import history from '@/store/History'
const mapStateToProps = (states: IStoreState) => ({
  authority: states.authority,
})

const mapDispatchToProps = (dispatch: any) => ({
  redirect: (url: string, params?: any) => dispatch(push(url)),
})

type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type Iprops = IStateProps & IDispatchProps
class Routes extends React.Component<Iprops, any> {
  componentDidMount() {
    if (!this.props.authority.logined) {
      this.props.redirect('/login')
    }

    history.listen((location, action) => {
      if (location.pathname !== '/login' && !this.props.authority.logined) {
        push('/login')
      }
    })
  }
  render() {
    return (
      <>
        {this.props.authority.logined ? (
          <>
            <Route exact path="/" component={App} />
            <Route exact path="/app" component={App} />
          </>
        ) : (
          <Route path="/login" component={Login} />
        )}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
