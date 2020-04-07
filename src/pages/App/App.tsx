import React from 'react'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      text: 'React Demo',
    }
  }
  render(): JSX.Element {
    return <div>app</div>
  }
}

export default App
