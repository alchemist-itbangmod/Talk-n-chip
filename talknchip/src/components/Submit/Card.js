import React, { Fragment } from "react"
import styled from "styled-components"
import { Card, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap"

const speakers = [
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },

  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },

  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  },
  {
    date: "เสนอเมื่อ 14/8",
    topic: "ทอดหมูกรอบไม่ให้กรอบ ถ้าจะให้กรอบต้องทำให้"
  }
]

const SessionContainer = styled(Container)`
  background-color: #F1BE42;
  color: #64342F;
`

const InnerSessionContainer = styled(Container)`
  h1 {
    font-weight: 500;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 1.75rem;
  }
`
const CARDBody = styled(CardBody)`
color:#69302c;

`

const SpeakerContainer = () => (
  <Fragment>
    {
      speakers.map((speaker, index) => (
        <Col key={index} sm='4' className='pb-5' >
          <CardSubmit speaker={speaker} />
        </Col>
      ))
    }
  </Fragment>
)

const CardSubmit = ({ speaker: {topic, date} }) => (
  <Card >
    <CARDBody >
      <CardTitle className='text-center'>{topic}</CardTitle>
      <div className='d-flex justify-content-between align-items-center'>
        <CardSubtitle className='text-left'>{date}</CardSubtitle>
        <div>
          <a href='#'><span>D</span></a>
          <a href='#'><span>E</span></a>
        </div>

      </div>
    </CARDBody>
  </Card>

)
const MainSession = () => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer>
      <Row>
        <Col >
          <Row>
            <SpeakerContainer />
          </Row>
        </Col>
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default MainSession
