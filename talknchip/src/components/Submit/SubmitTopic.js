import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"

const topic = "หัวข้อที่เสนอ"

const SubmitContainer = styled(Container)`
  background-color: #f1be42;
`

const SubmitText = styled.p`
  color: #69302c;
  margin-bottom: 0px;
`

const SubmitTopic = () => (
  <SubmitContainer fluid>
    <Container className='py-1'>
      <Row>
        <Col className='ml-auto'>
          <div className='d-flex justify-content-between align-items-center'>
            <SubmitText>{topic}</SubmitText>
            <Button>เสนอหัวข้อใหม่</Button>
          </div>

        </Col>
      </Row>

    </Container>
  </SubmitContainer>
)

export default SubmitTopic
