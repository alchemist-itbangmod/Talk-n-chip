import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const topic = "มาโหวตหัวข้อสุดชิบกันเถอะ"

const SubmitText = styled.p`
  color: #69302c;
  margin-bottom: 0px;
`
const VoteTopic = () => (
  <Container fluid>
    <Container className='py-1'>
      <Row>
        <Col className='ml-auto'>
          <div className='d-flex justify-content-between align-items-center'>
            <SubmitText>{topic}</SubmitText>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
)

export default VoteTopic
