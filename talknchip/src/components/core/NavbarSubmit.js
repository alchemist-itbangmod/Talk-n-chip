import React, { Fragment } from "react"
import {
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler as DefaultNavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import { db, auth, provider } from "../../tools/firebasehelper"

import styled from "styled-components"

const LoginButton = styled.button`
  background-color: transparent;
  border: 1px solid #69302c;
  border-radius: .25em;
  color: #69302c;
`
const Navbar = styled(DefaultNavbar)`
  padding: 0em;
  padding-top: 3em;
`
const NavToggler = styled(DefaultNavbarToggler)`
  border: 1px solid #000;
`
const Navlink = styled(NavLink)`
  color:#69302c;
`
const NavBrand = styled(NavbarBrand)`
  color:#69302c;
`

export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    name: "Guest",
    collapsed: true,
    userId: undefined,
    buttonText: "เข้าสู่ระบบ"
  }
    toggle = this.toggle.bind(this)

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
    toggle () {
      this.setState({
        isOpen: !this.state.isOpen,
        collapsed: !this.state.collapsed
      })
    }
    login () {
      const name = window.localStorage.getItem("name")
      if (name === undefined || name === null) {
        auth().signInWithPopup(provider)
          .then(({ user }) => {
            db.ref(`/users/${user.uid}`)
              .set({
                name: user.displayName,
                photoURL: user.photoURL
              })
            this.state.userId = user.uid
            window.localStorage.setItem("uid", user.uid)
            window.localStorage.setItem("name", user.displayName)
            window.localStorage.setItem("img", user.photoURL)
            this.setState({
              name: user.displayName,
              buttonText: "ออกจากระบบ ?"
            })
          })
      } else {
        window.localStorage.clear()
        window.location.reload()
      }
    }

    render () {
      return (
        <Fragment>
          <Navbar expand='md' color='' light>
            <NavBrand href='/' >Talk n' Chip</NavBrand>
            <NavToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.collapsed} navbar>
              <Nav className='mr-4 ml-auto' navbar>
                <NavItem>
                  <Navlink >สวัสดี , {this.state.name} </Navlink>
                </NavItem>
                <NavItem>
                  {/* <Navlink >{this.state.name}</Navlink> */}
                </NavItem>
                <NavItem>
                  <LoginButton onClick={() => this.login()}>{this.state.buttonText}</LoginButton>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

        </Fragment>
      )
    }
}
