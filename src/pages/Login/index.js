import React, { useState } from "react"
import AuthLayout from "../../common/components/layout/Auth"
import { Input } from "antd"
import { auth, authService, dbService } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const navigate = useNavigate()
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        localStorage.setItem("isLoggedIn", "true")

        navigate("/profile")
      })

      .catch((err) => setLoginError(err.message))
  }
  return (
    <AuthLayout
      submitText="Login"
      redirectLink="/auth/register"
      redirectLinkText="Register"
      handleSubmit={handleLogin}
      errorMessage={loginError}
    >
      <Input
        label="email"
        placeholder="Email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
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
