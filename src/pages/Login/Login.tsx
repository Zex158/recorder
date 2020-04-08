import React from 'react'
import { Layout } from 'antd'
import { Form, Input, Button, Checkbox } from 'antd'
import { Row, Col } from 'antd'
import Style from './Login.scss'
import { connect } from 'react-redux'
import { setLoginAction } from '@/actions/authority/authority'
import { push } from 'connected-react-router'
import { message } from 'antd'

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
const { Header, Footer, Content } = Layout

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

class Login extends React.Component<Iprops, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      userName: '',
      password: '',
    }

    this.login = this.login.bind(this)
  }
  onFinished = (values: any) => {
    console.log('Success:', values)
  }
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  login = () => {
    this.props.setLoginAction(true, {
      logined: true,
      loginFrom: null,
      userId: '12312',
      loginType: 0,
    })
    this.props.login()
    message.success('logined success !')
  }
  render(): JSX.Element {
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Header>Login</Header>
        <Content className={Style['form-container']}>
          <Row justify="center" className={Style['form-wrapper']}>
            <Col span={8}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinished}
                onFinishFailed={this.onFinishFailed}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" onClick={this.login}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Login)
