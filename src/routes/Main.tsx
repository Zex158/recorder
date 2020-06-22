import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import List from '@/components/List/List'

const mapStateToProps = (states: IStoreState) => ({})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispathToProps = (dispatch: any) => ({
  linkTo: (url: string) => dispatch(push(url)),
})

type IDispatchProps = ReturnType<typeof mapDispathToProps>

type Iprops = IStateProps & IDispatchProps
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

class MainPage extends React.Component<any, any> {
  state = {
    collapsed: false,
  }
  render(): JSX.Element {
    return (
      <Layout style={{ height: '100%' }}>
        <Layout>
          <Content>
            <Route exact path="/main/list" component={List} />
            <Route exact path="/main/profile" component={List} />
          </Content>
        </Layout>
        <Footer>
          <a onClick={() => this.props.linkTo('/main/list')}>List</a>
          <a onClick={() => this.props.linkTo('/main/profile')}>Profile</a>
        </Footer>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(MainPage)
