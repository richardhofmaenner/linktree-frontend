import React, { Component } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import Input from '@/components/forms/Input'

class Login extends Component {

  constructor(props) {
    super(props)
    this.valueChanged = this.valueChanged.bind(this)
    this.state = {
      username: '',
      password: '',
    }
  }

  valueChanged(e) {
    e.preventDefault()
    switch (e.target.name) {
    case 'username': this.setState({ username: e.target.value }); break
    case 'password': this.setState({ password: e.target.value }); break
    default: break
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <CenterModalLayout title="Login" modalTitle="Sign in">
        <div>
          <Input
            onValueChange={this.valueChanged}
            name="username"
            placeholder="Username"
            value={username}
          />
        </div>
        <div>
          <Input
            onValueChange={this.valueChanged}
            name="password"
            placeholder="Password"
            type="password"
            value={password}
          />
        </div>
      </CenterModalLayout>
    )
  }
}

export default Login
