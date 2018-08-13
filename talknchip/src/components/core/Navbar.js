import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

import styled from "styled-components"

const Navbarja = styled(Navbar)`
  background-color:transparent;
  padding: 1em;
  padding-top: 3em;
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
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Navbarja expand='md'>
          <NavBrand href='/'>Talk n' Chip</NavBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto ml-auto' navbar>
              <NavItem>
                <Navlink href='/'>คืออะไร</Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='/'>ใครมาพูด</Navlink>
              </NavItem>
              <NavItem>
                <Navlink href='/'>จัดที่ไหน</Navlink>
              </NavItem>
            </Nav>
            <Button className='fixed-right'>ส่งหัวข้อสุดชิพ</Button>
          </Collapse>
        </Navbarja>
      </div>
    )
  }
}
