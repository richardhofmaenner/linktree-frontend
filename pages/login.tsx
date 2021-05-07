import React, { Component } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'
import Cookie from 'js-cookie'
import ErrorAlert from '@/components/alerts/ErrorAlert'

type myType = {
  username: string,
  password: string,
  errors: undefined | { message: string },
  validationErrors: undefined | [{ field: string, message: string, rule: string }]
}

type myProps = {}

export default class Login extends Component<myProps, myType> {
  constructor(props) {
    super(props)
    this.valueChanged = this.valueChanged.bind(this)
    this.state = {
      username: '',
      password: '',
      errors: undefined,
      validationErrors: undefined,
    }
  }

  componentDidMount() {
    if (Cookie.get('error') !== undefined) {
      this.setState({ errors: JSON.parse(atob(Cookie.get('error'))) })
      Cookie.remove('error')
    } else if (Cookie.get('validation-error') !== undefined) {
      const message = JSON.parse(atob(Cookie.get('validation-error')))
      const { errors } = message.message
      this.setState({ validationErrors: errors })
      Cookie.remove('validation-error')
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

  render() {
    const { username, password, errors, validationErrors } = this.state
    return (
      <CenterModalLayout title="Login" modalTitle="Sign in">
        {errors
          && <ErrorAlert>{errors.message}</ErrorAlert>}
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
            <SubmitBtn>Sign in</SubmitBtn>
          </div>
        </form>
      </CenterModalLayout>
    )
  }
}
