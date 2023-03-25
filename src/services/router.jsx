import Home from "../pages/Home"
import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Find from "../pages/Find"
import PrivateRoute from "../common/components/PrivateRoute"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        index: "true",
        element: <Home />,
      },
      {
        path: "find",
        element: <Find />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  //{},
])
