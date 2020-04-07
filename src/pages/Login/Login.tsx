import React from 'react'
import { Layout } from 'antd'
import { Form, Input, Button, Checkbox } from 'antd'
import { Row, Col } from 'antd'

import Style from './Login.scss'

const { Header, Footer, Content } = Layout

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

class Login extends React.Component<any, any> {
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
    console.log('login with ', this.state)
  }
  render(): JSX.Element {
    return (
      <Layout>
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
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer>aa</Footer>
      </Layout>
    )
  }
}

export default Login
