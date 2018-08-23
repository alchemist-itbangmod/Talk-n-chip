import React from "react"
import styled from "styled-components"
import {
  Nav,
  NavItem
} from "reactstrap"

import Navbar, { Navlink } from "./Navbar"
import { db, auth, provider } from "../../tools/firebasehelper"

const LoginButton = styled.button`
  font-size: 19px;
  border: 1px solid #69302c;
  border-radius: 3px;
  background-color: transparent;
  padding: 0.4em 1.25em;
  color: #69302c;
`

export default class NavBar extends React.Component {
  state = {
    name: "Guest",
    userId: undefined,
    buttonText: "เข้าสู่ระบบ"
  }

  componentDidMount () {
    const nameCheck = window.localStorage.getItem("name")
    if (nameCheck === null || nameCheck === undefined) {
      this.setState({
        name: "Guest"
      })
    } else {
      this.setState({
        name: window.localStorage.getItem("name"),
        buttonText: "ออกจากระบบ ?"
      })
    }
  }
  login = async () => {
    const name = window.localStorage.getItem("name")
    if (!name) {
      await auth().signInWithPopup(provider)
        .then(({ user }) => {
          db.ref(`/users/${user.uid}`)

          this.state.userId = user.uid
          window.localStorage.setItem("uid", user.uid)
          window.localStorage.setItem("name", user.displayName)
          window.localStorage.setItem("img", user.photoURL)
          this.setState({
            name: user.displayName,
            buttonText: "ออกจากระบบ"
          })
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
    } else {
      window.localStorage.clear()
      window.location.reload()
    }
  }

  render () {
    return (
      <Navbar>
        <Nav className='ml-auto d-flex align-items-center justify-content-between' navbar>
          <NavItem>
            <Navlink className='mr-3'>สวัสดี , {this.state.name} </Navlink>
          </NavItem>
          <NavItem>
            <LoginButton onClick={() => this.login()}>{this.state.buttonText}</LoginButton>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
