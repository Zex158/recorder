import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'React Demo'
    }
  }
  render() {
    return (
      <div>
        <p> {this.state.text} </p>
      </div>
    )
  }
}

export default App
