import React from 'react'
import { Result } from 'antd'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      text: 'React Demo',
    }
  }
  render(): JSX.Element {
    return <Result status="success" title="Successfully Logined" subTitle="Welcome" />
  }
}

export default App
