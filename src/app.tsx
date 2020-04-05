import React from 'react'
import Style from './app.scss'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      text: 'React Demo',
    }
  }
  render(): JSX.Element {
    return (
      <div className={Style.a}>
        <p className={Style.b}> {this.state.text} </p>
      </div>
    )
  }
}

export default App
