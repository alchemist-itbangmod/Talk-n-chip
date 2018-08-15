import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import NavBarLogin from "../Core/NavbarSubmit.js"

const Landing = styled.div`
  color:#69302c;
  font-weight: 500;
  background-color:#F1BE42;
  height: 10vh;
`

const LoginSection = () => (
  <Landing>
    <Container>
      <NavBarLogin />
      <Row>
        <Col />
      </Row>
    </Container>
  </Landing>
)

export default LoginSection