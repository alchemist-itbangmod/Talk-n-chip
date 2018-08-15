import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"

const topic = "หัวข้อที่เสนอ"

const SubmitTopic = () => (
  <Container>
    <Row>
      <Col xs={12} lg={{size: 10, offset: 1}}>
        <div className='d-flex justify-content-between align-items-center'>
          <p><b>{topic}</b></p>
          <Button>เสนอหัวข้อใหม่</Button>
        </div>

      </Col>
    </Row>

  </Container>
)

export default SubmitTopic
