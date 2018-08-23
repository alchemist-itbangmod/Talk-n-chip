import React from "react"
import styled from "styled-components"
import { Nav, NavItem } from "reactstrap"

import Navbar, { Navlink } from "./Navbar"

const LoginButton = styled.button`
  font-size: 19px;
  border: 1px solid #69302c;
  border-radius: 3px;
  background-color: transparent;
  padding: 0.4em 1.25em;
  color: #69302c;
  cursor: pointer;
`

const NavbarSubmit = ({ login, user, buttonText }) => (
  <Navbar>
    <Nav className='ml-auto d-flex align-items-center justify-content-between' navbar>
      <NavItem>
        <Navlink className='mr-3'>สวัสดี , {user.displayName} </Navlink>
      </NavItem>
      <NavItem>
        <LoginButton onClick={login}>{buttonText}</LoginButton>
      </NavItem>
    </Nav>
  </Navbar>
)

export default NavbarSubmit
