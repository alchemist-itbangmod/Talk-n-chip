import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"

const topic = "หัวข้อที่เสนอ"

const SubmitContainer = styled(Container)`
  background-color: #f1be42;
`

const SubmitTopic = () => (
  <SubmitContainer>
    <Container>
      <Row>
        <Col className='mr-4 ml-auto'>
          <div className='d-flex justify-content-between align-items-center'>
            <p>{topic}</p>
            <Button>เสนอหัวข้อใหม่</Button>
          </div>

        </Col>
      </Row>

    </Container>
  </SubmitContainer>
)

export default SubmitTopic
