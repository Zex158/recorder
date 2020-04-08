import React, { ChangeEventHandler, Component } from 'react'
import { connect } from 'react-redux'
import { setLoginAction } from '@/actions/authority/authority'
import { push } from 'connected-react-router'
const mapStateToProps = (states: IStoreState) => ({
  authority: states.authority,
})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispathToProps = (dispatch: any) => ({
  setLoginAction: (logined: boolean, authority: any) => dispatch(setLoginAction(logined, authority)),
  login: () => dispatch(push('/app')),
})

type IDispatchProps = ReturnType<typeof mapDispathToProps>

type Iprops = IStateProps & IDispatchProps

class Edit extends Component<Iprops> {
  onCheckChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(this.props)
    this.props.setLoginAction(
      e.target.checked,
      e.target.checked
        ? {
            logined: true,
            loginFrom: null,
            userId: '',
            loginType: 0,
          }
        : undefined,
    )
    if (e.target.checked) {
      this.props.login()
    }
  }
  save = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <p>logined: {this.props.authority.logined ? 'true' : 'false'}</p>
        <input type="checkbox" checked={this.props.authority.logined} onChange={this.onCheckChange}></input>
        <button onClick={this.save}>ok</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Edit)
