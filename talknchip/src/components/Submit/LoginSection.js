import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import NavBarLogin from "../Core/NavbarSubmit.js"

const Landing = styled.div`
  color:#69302c;
  font-weight: 500;
  background-color:#F1BE42;
`

const LoginSection = () => (
  <Landing className='pb-3'>
    <Container className='.col-'>
      <Container className='mr-6 ml-auto '>
        <Row >
          <Col >
            <NavBarLogin />
          </Col>
        </Row>
      </Container>
    </Container>
  </Landing>
)

export default LoginSection
