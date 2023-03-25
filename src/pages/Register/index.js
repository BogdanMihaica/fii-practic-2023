import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../common/components/layout/Auth"
import { auth, authService, dbService } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
export default function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUpError, setSignUpError] = useState("")
  const navigate = useNavigate()
  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        auth.updateProfile(authService.currentUser, {
          displayName: username,
        })
        navigate("/auth/login")
      })
      .catch((err) => setSignUpError(err.message))
  }
  return (
    <AuthLayout
      errorMessage={signUpError}
      submitText="Register"
      redirectLink="/auth/login"
      redirectLinkText="Login"
      handleSubmit={handleRegister}
    >
      <Input
        label="email"
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      ></Input>
      <Input
        label="username"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      ></Input>
      <Input
        label="password"
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      ></Input>
    </AuthLayout>
  )
}
