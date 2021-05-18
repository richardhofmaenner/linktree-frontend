import React, { Component } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'
import ErrorAlert from '@/components/alerts/ErrorAlert'
import { UserStore } from '@/stores/UserStore'
import { router } from 'next/client'

type myType = {
  username: string,
  password: string,
  errors: undefined | string,
  validationErrors: undefined | [{ field: string, message: string, rule: string }]
}

type myProps = {}

export default class Login extends Component<myProps, myType> {
  constructor(props) {
    super(props)
    this.valueChanged = this.valueChanged.bind(this)
    this.signInRequest = this.signInRequest.bind(this)
    this.state = {
      username: '',
      password: '',
      errors: undefined,
      validationErrors: undefined,
    }
  }

  valueChanged(e) {
    e.preventDefault()
    switch (e.target.name) {
    case 'email': this.setState({ username: e.target.value }); break
    case 'password': this.setState({ password: e.target.value }); break
    default: break
    }
  }

  async signInRequest(e) {
    e.preventDefault()
    this.setState({ errors: undefined, validationErrors: undefined })
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      })
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()
          UserStore.update(s => {
            s.token = json.token
            s.isLoggedIn = true
          })
          await router.push('/dashboard')
        } else if (res.status === 403) {
          const json = await res.json()
          this.setState({ errors: json.error })
        } else if (res.status === 422) {
          const json = await res.json()
          this.setState({ validationErrors: json.errors })
        } else {
          this.setState({ errors: 'Something went wrong' })
        }
      })
  }

  render() {
    const { username, password, errors, validationErrors } = this.state
    return (
      <CenterModalLayout title="Login" modalTitle="Sign in">
        {errors
          && <ErrorAlert>{errors}</ErrorAlert>}
        {validationErrors
        && (
          <ErrorAlert>
            <ul>
              {validationErrors.map((error) => <li>{error.message}</li>)}
            </ul>
          </ErrorAlert>
        )}
        <form method="post" action={`${process.env.NEXT_PUBLIC_API_URL}/login`}>
          <div>
            <Input
              onValueChange={this.valueChanged}
              name="email"
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
            <SubmitBtn onClick={this.signInRequest}>Sign in</SubmitBtn>
          </div>
        </form>
      </CenterModalLayout>
    )
  }
}
