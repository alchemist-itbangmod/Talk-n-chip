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
import firebase, {db, getAll, getOne, insert, auth, provider } from "../../tools/firebasehelper"

import styled from "styled-components"
const LoginButton = styled.button`
  display: ${props => props.showButton || ""};
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
    show: "block"
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
          name: window.localStorage.getItem("name")
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
      if (this.state.userId === undefined || this.state.userId === null) {
        auth().signInWithPopup(provider)
          .then(({ user }) => {
            // user = JSON.stringify(user)
            // windowChecker() && window.localStorage.setItem("user", user)
            // user = JSON.parse(user)
            db.ref(`/users/${user.uid}`)
              .set({
                name: user.displayName,
                // email: user.email,
                photoURL: user.photoURL
              })
            // this.setState({ user })
            this.state.userId = user.uid
            window.localStorage.setItem("uid", user.uid)
            window.localStorage.setItem("name", user.displayName)
            window.localStorage.setItem("img", user.photoURL)
            this.setState({
              name: user.displayName,
              show: "none"
            })
          })
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
                  <Navlink >สวัสดี ,</Navlink>
                </NavItem>
                <NavItem>
                  <Navlink >{this.state.name}</Navlink>
                </NavItem>
                <NavItem>
                  <LoginButton showButton={this.state.show} onClick={() => this.login()}>Login</LoginButton>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

        </Fragment>
      )
    }
}
