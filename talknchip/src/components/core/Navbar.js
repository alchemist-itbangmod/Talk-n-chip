import React, { Fragment } from "react"
import {
  Container,
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import * as Scroll from "react-scroll"
import styled from "styled-components"

const DefaultLink = Scroll.Link

const Link = styled(DefaultLink)`
  cursor: pointer;
`

const Navbar = styled(DefaultNavbar)`
  padding: 1em;
  @media (max-width: 414px){
    display: none;
  }
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
      <Fragment>
        <Navbar expand='md' className='sticky-top' light>
          <Container>
            <NavBrand href='#home'>Talk n' Chip</NavBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto ml-auto' navbar>
                <NavItem>
                  <Navlink>
                    <Link to='what' smooth >
                  คืออะไร
                    </Link>
                  </Navlink>
                </NavItem>
                <NavItem>
                  <Navlink>
                    <Link to='who' smooth >
                ใครมาพูด
                    </Link>
                  </Navlink>
                </NavItem>
                <NavItem>
                  <Navlink>
                    <Link to='where' smooth>
                จัดที่ไหน
                    </Link>
                  </Navlink>
                </NavItem>
              </Nav>
              <Navlink href='../Submit'>
                <Button className='fixed-right'>ส่งหัวข้อสุดชิพ</Button>
              </Navlink>
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}
