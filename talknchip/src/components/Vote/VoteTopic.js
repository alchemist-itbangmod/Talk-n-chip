import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const topic = "หัวข้อสุดชิบทั้งหมดตอนนี้"
// const topic = "มาโหวตหัวข้อสุดชิบกันเถอะ"

const SubmitText = styled.p`
  color: #69302c;
  margin-bottom: 0px;
`
const VoteTopic = () => (
  <Container fluid>
    <Container className='py-3'>
      <Row>
        <Col className='ml-auto'>
          <div className='d-flex flex-row align-items-center'>
            <SubmitText>{topic}</SubmitText>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
)

export default VoteTopic
