import React, { useContext, useState } from 'react'
import CenterModalLayout from '@/layouts/CenterModalLayout'
import ErrorAlert from '@/components/alerts/ErrorAlert'
import Input from '@/components/forms/Input'
import SubmitBtn from '@/components/forms/SubmitBtn'
import AuthContext from '@/context/AuthContext'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, error, validationError } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <CenterModalLayout title="Login" modalTitle="Sign in">
      {error
      && <ErrorAlert>{error}</ErrorAlert>}
      {validationError
      && (
        <ErrorAlert>
          <ul>
            {validationError.map((error) => <li>{error.message}</li>)}
          </ul>
        </ErrorAlert>
      )}
      <form method="post" action={`${process.env.NEXT_PUBLIC_API_URL}/login`}>
        <div>
          <Input
            onValueChange={(e) => setUsername(e.target.value)}
            name="email"
            placeholder="Username"
            value={username}
          />
        </div>
        <div>
          <Input
            onValueChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            type="password"
            value={password}
          />
        </div>
        <div>
          <SubmitBtn onClick={handleSubmit}>Sign in</SubmitBtn>
        </div>
      </form>
    </CenterModalLayout>
  )
}

export default Login
