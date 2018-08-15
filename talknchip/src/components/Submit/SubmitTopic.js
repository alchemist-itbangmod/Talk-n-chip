import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"

const topic = "หัวข้อที่เสนอ"

const SubmitContainer = styled(Container)`
  background-color: #f1be42;
`

const SubmitTopic = () => (
  <SubmitContainer fluid className='px-0 pt-5'>
    <Row>
      <Col className='mr-4 ml-auto'>
        <div className='d-flex justify-content-between align-items-center'>
          <p>{topic}</p>
          <Button>เสนอหัวข้อใหม่</Button>
        </div>

      </Col>
    </Row>

  </SubmitContainer>
)

export default SubmitTopic
