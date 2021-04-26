import React, { Component } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'

type myType = {
  username: string,
  password: string,
}

type myProps = {}

class Login extends Component<myProps, myType> {
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
        <div>
          <SubmitBtn>Sign in</SubmitBtn>
        </div>
      </CenterModalLayout>
    )
  }
}

export default Login
