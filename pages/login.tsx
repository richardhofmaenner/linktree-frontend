import React, { Component } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import Input from '@/components/forms/Input'
import { useState } from 'react'

class Login extends Component {

  constructor(props) {
    super(props)
    this.valueChanged = this.valueChanged.bind(this)
  }

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <CenterModalLayout title={'Login'} modalTitle={'Sign in'}>
        <div>
          <Input onValueChange={this.valueChanged} name={'username'} placeholder='Username' value={this.state.username} />
        </div>
        <div>
          <Input onValueChange={this.valueChanged} name={'password'} placeholder='Password' type='password' />
        </div>
      </CenterModalLayout>
    )
  }

  valueChanged(e) {
    e.preventDefault()
    switch (e.target.name) {
    case 'username': this.setState({  username: e.target.value }); break
    case 'password': this.setState({ password: e.target.value }); break
    default: break
    }
  }

}

export default Login
