import React from "react"
import styled from "styled-components"
import { Button } from "antd"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouseUser,
  faRightToBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
const Layout = styled.div`
  background: linear-gradient(to left, #34e89e, #0f3443);
  display: flex;
  align-items: center;
  justify-content: center;
  /*border-bottom: 1px solid white;*/
  height: 60px;
  position: sticky;
  top: 0;
  list-style-type: none;
  width: 100%;
  z-index: 1;
`
const Navigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    list-style-type: none;
    margin: 0px 25px;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #ffffffc4;
    }
  }
  svg {
    margin-right: 5px;
  }
`
const MENU_ITEMS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Find",
    path: "/find",
  },
  {
    title: "Login",
    path: "/auth/login",
  },
  {
    title: "Register",
    path: "/auth/register",
  },
]
function renderRoute({ title, path }) {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  )
}
export default function NavBar() {
  const navigate = useNavigate()
  function signOut() {
    localStorage.clear()
    navigate("/auth/login")
  }

  return (
    <Layout>
      <Navigation>{MENU_ITEMS.map(renderRoute)}</Navigation>

      <li>
        <Button type="text" onClick={() => signOut()}>
          Log Out
        </Button>
      </li>
    </Layout>
  )
}
