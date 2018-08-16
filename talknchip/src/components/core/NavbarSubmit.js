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

import styled from "styled-components"

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

const Button = styled.button`
  background-color: transparent;
  color: #69302c;
  border: 2px solid #69302c;
  border-radius: .1em;
  padding: .5em 1.25em;
`
export default class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      nameLogin: "login",
      collapsed: true

    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
      collapsed: !this.state.collapsed

    })
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
                <Navlink >Guest</Navlink>
              </NavItem>
            </Nav>
            <Button className='fixed-right' >{this.state.nameLogin}</Button>
          </Collapse>
        </Navbar>

      </Fragment>
    )
  }
}
