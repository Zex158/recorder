import React from 'react'

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      userName: '',
      password: '',
    }

    this.login = this.login.bind(this)
  }

  login() {
    console.log('login with ', this.state)
  }
  render(): JSX.Element {
    return (
      <div>
        <p>
          <span>name:</span>
          <input type="text" value={this.state.userName} />
        </p>
        <p>
          <span>password:</span>
          <input type="password" value={this.state.password} />
        </p>
        <p>
          <button onClick={this.login}>login</button>
        </p>
      </div>
    )
  }
}

export default Login
