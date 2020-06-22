import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import List from '@/components/List/List'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

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
  state = {
    collapsed: false,
  }
  render(): JSX.Element {
    return (
      <Layout>
        <Layout>
          <Content>
            <Route exact path="/main/list" component={List} />
            <Route exact path="/main/profile" component={List} />
          </Content>
        </Layout>
        <Footer>
          <NavLink to="/main/list"></NavLink>
          <NavLink to="/main/profile"></NavLink>
        </Footer>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(MainPage)
