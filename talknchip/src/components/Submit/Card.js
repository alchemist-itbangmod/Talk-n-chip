import React, { Fragment } from "react"
import styled from "styled-components"
import { Card, CardBody, CardTitle, CardSubtitle, Alert, Container, Row, Col } from "reactstrap"
import { db, getAll } from "../../tools/firebasehelper"

const SessionContainer = styled(Container)`
  background-color: #F1BE42;
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
const AlertStyled = styled(Alert)`
  padding-left: 27em;
 
`
const CardTitleStyled = styled(CardTitle)`
  color: #64342F;
`

const CardSubtitleStyled = styled(CardSubtitle)`
  color: #282829;
`

class SpeakerContainer extends React.Component {
  state = {
    speakers: [],
    visible: true
  }
  onDismiss = this.onDismiss.bind(this)
  onDismiss () {
    this.setState({ visible: false })
  }
  fechData = () => {
    const uid = window.localStorage.getItem("uid")
    if (uid === null || uid === undefined) {
      this.setState({ visible: true })
    } else {
      try {
        getAll("users/" + uid).once("value").then(topicSnapshot => {
          console.log(topicSnapshot.val())
          try {
            const speakers = Object.values(topicSnapshot.val())
            this.setState({ speakers })
            console.log(this.state.speakers)
          } catch (e) { console.log(e) }
        })
        this.onDismiss()
      } catch (e) {
        console.log(e)
      }
    }
  }
  componentDidMount () {
    this.fechData()
  }
  componentWillMount () {
    // this.fechData()
  }

  render () {
    return (
      <Fragment>
        {
          this.state.speakers.map((speaker, index) => (
            <Col key={index} sm='4' className='pb-5' >
              <CardSubmit speaker={speaker} value={index} />
            </Col>
          ))
        }
        <Col className='justify-content-center'>
          <AlertStyled color='danger' isOpen={this.state.visible} toggle={this.onDismiss}>
             ต้อง Login ก่อนถึงจะเห็นหัวข้อน่ะ!!
          </AlertStyled>
        </Col>
      </Fragment>
    )
  }
}

const CardSubmit = ({ speaker: {topic, date} }) => (
  <Card >
    <CardBody>
      <CardTitleStyled className='text-center'>{topic}</CardTitleStyled>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <CardSubtitleStyled className='text-left'>{date}</CardSubtitleStyled>
        <div>
          <button type='button' className='btn btn-default mx-1'>
            <span className='glyphicon glyphicon-star'>D</span>
          </button>
          <button type='button' className='btn btn-default mx-1'>
            <span className='glyphicon glyphicon-star'>E</span>
          </button>
        </div>
      </div>
    </CardBody>
  </Card>
)
const MainSession = () => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer >
      <Row>
        <Col xs='12' xl='12'>
          <Row>
            <SpeakerContainer />
          </Row>
        </Col>
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default MainSession
