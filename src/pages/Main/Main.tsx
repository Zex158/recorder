import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const mapStateToProps = (states: IStoreState) => ({
  authority: states.authority,
  currentUser: states.currentUser,
})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispathToProps = (dispatch: any) => ({
  loginSuccess: () => dispatch(push('/app')),
})

type IDispatchProps = ReturnType<typeof mapDispathToProps>

type Iprops = IStateProps & IDispatchProps

class MainPage extends React.Component<Iprops, any> {
  constructor(props: any) {
    super(props)
    console.log(this.props.currentUser)
  }
  render(): JSX.Element {
    return <>main</>
  }
}

export default connect(mapStateToProps, mapDispathToProps)(MainPage)
