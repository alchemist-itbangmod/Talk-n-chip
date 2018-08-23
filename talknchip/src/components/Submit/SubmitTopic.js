import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Modals from "./Modals"

const SubmitText = styled.span`
  color: #69302c;
  margin-bottom: 0px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const SubmitTopic = ({ user }) => (
  <Container fluid>
    <Container className='py-1'>
      <Row>
        <Col className='d-flex justify-content-between align-items-center'>
          <SubmitText>{"หัวข้อที่เสนอของคุณ"}</SubmitText>
          <Modals user={user} />
        </Col>
      </Row>
    </Container>
  </Container>
)

export default SubmitTopic
