import React, { Fragment } from "react"
import {
  Container,
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem as DefaultNavItem,
  NavLink
} from "reactstrap"
import * as Scroll from "react-scroll"
import { push } from "gatsby-link"
import styled from "styled-components"

const DefaultLink = Scroll.Link

const Link = styled(DefaultLink)`
  cursor: pointer;
  font-size: 19px;
`

const Navbar = styled(DefaultNavbar)`
  padding: 1em;
  background-color: ${props => props.color};
  transition: .5s;
`
export const Navlink = styled(NavLink)`
  color:#69302c;
  font-size: 19px;
  @media (max-width: 768px) {
    text-align: center;
  }
`
const NavBrand = styled(NavbarBrand)`
  color:#69302c;
`
const NavItem = styled(DefaultNavItem)`
  @media (max-width: 768px) {
    padding: .7em 0;
    width: 100%;
    text-align: center;
  }
`

const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  background-color: transparent;
  color: #69302c;
  border: 2px solid #69302c;
  border-radius: .1em;
  padding: .5em 1.25em;
  font-size: 19px;
  &:hover{
    background-color: #69302c;
    color: #fff;
  }
`

const Img = styled.img`
  height: 60px;
`
export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    color: "transparent"
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  changeRoute = () => {
    push("/submit")
  }
  componentDidMount = () => {
    document && document.addEventListener("scroll", (e) => {
      if (window && window.scrollY > 30) {
        this.setState({
          color: "#f8bc00"
        })
      } else {
        this.setState({
          color: "transparent"
        })
      }
    }, true)
  }

  render () {
    const { children } = this.props
    return (
      <Navbar color={this.state.color} expand='md' className='sticky-top' light>
        <Container>
          <NavBrand href='#home'>
            <Img src='/static/images/Asset_10.svg' />
          </NavBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { children || <Fragment>
              <Nav className='mr-auto ml-auto' navbar>
                <NavItem>
                  <Link className='px-3' to='what' smooth >
                  คืออะไร
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className='px-3' to='who' smooth >
                ใครมาพูด
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className='px-3' to='where' smooth>
                จัดที่ไหน
                  </Link>
                </NavItem>
              </Nav>
              <Navlink>
                <Button onClick={this.changeRoute} className='fixed-right'>ส่งหัวข้อสุดชิพ</Button>
              </Navlink>
            </Fragment>
            }
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
