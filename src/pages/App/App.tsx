import React from 'react'
import Edit from '@/components/tes/editor'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      text: 'React Demo',
    }
  }
  render(): JSX.Element {
    return (
      <div>
        <Edit></Edit>
        <p> {this.state.text} </p>
      </div>
    )
  }
}

export default App
