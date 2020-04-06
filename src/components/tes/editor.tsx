import React, { ChangeEventHandler, Component } from 'react'
import { connect } from 'react-redux'
import { setLoginAction } from '@/actions/authority/authority'

const mapStateToProps = (states: IStoreState) => ({
  authority: states.authority,
})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispathToProps = {
  setLoginAction,
}

type IDispatchProps = typeof mapDispathToProps

type Iprops = IStateProps & IDispatchProps

class Edit extends Component<Iprops> {
  onCheckChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const loginState = e.target.checked
      ? {
          logined: true,
          loginType: 1,
          loginFrom: 'app',
        }
      : {
          logined: false,
        }
    console.log(this.props)
    this.props.setLoginAction({
      ...this.props.authority,
      ...loginState,
    })
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
