import React from "react"
import styled from "styled-components"
import { Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const SessionContainer = styled(Container)`
  min-height: calc(105vh - 200px - 100px);
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

const deleteTopic = () => {}

const editTopic = () => {}

const CardSubmit = ({ topic: {title, date} }) => (
  <Card >
    <CardBody>
      <CardTitleStyled className='text-center'>{title}</CardTitleStyled>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <CardSubtitleStyled className='text-left'>{date}</CardSubtitleStyled>
        {/* <button type='button' onClick={() => { deleteTopic(title) }} className='btn btn-default mx-1'>
          <div>
            <FontAwesomeIcon icon='trash' />
          </div>
        </button> */}
        {/* <button type='button' onClick={() => { editTopic(title) }} className='btn btn-default mx-1'>
          <div>
            <FontAwesomeIcon icon='pen' />
          </div>
        </button> */}
      </div>
    </CardBody>
  </Card>
)

const TopicContainer = ({ topics }) => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer>
      <Row>
        {
          topics.map((topic, index) => (
            <Col key={index} xs={12} md={4} className='pb-5' >
              <CardSubmit topic={topic} value={index} />
            </Col>
          ))

        }
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default TopicContainer
