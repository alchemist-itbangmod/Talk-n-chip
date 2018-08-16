import React, { Fragment } from "react"
import styled from "styled-components"
import { Card, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap"

const SessionContainer = styled(Container)`
  background-color: #F1BE42;
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
const CardTitleStyled = styled(CardTitle)`
  color: #64342F;
`

const CardSubtitleStyled = styled(CardSubtitle)`
  color: #282829;
`

class SpeakerContainer extends React.Component {
  state = {
    speakers: [
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
  }
  render () {
    return (
      <Fragment>
        {
          this.state.speakers.map((speaker, index) => (
            <Col key={index} sm='4' className='pb-5' >
              <CardSubmit speaker={speaker} />
            </Col>
          ))
        }
      </Fragment>
    )
  }
}

const CardSubmit = ({ speaker: {topic, date} }) => (
  <Card >
    <CardBody>
      <CardTitleStyled className='text-center'>{topic}</CardTitleStyled>
      <div className='d-flex justify-content-between align-items-center'>
        <CardSubtitleStyled className='text-left'>{date}</CardSubtitleStyled>
        <div>
          <a href='#'><span>D</span></a>
          <a href='#'><span>E</span></a>
        </div>
      </div>
    </CardBody>
  </Card>

)
const MainSession = () => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer>
      <Row>
        <Col>
          <Row>
            <SpeakerContainer />
          </Row>
        </Col>
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default MainSession
