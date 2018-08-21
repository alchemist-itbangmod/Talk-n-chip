import React, { Fragment } from "react"
import styled from "styled-components"
import { db, getAll } from "../../tools/firebasehelper"
import Button from "../core/Button"
import { Card, CardBody, CardTitle, CardSubtitle, Alert, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap"

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
    visible: true,
    modal: false,
    isOpen: false,
    userId: undefined,
    name: "",
    photo: "",
    date: null,
    indexofDelete: 0
  }
  onDismiss = this.onDismiss.bind(this)
  onDismiss () {
    this.setState({ visible: false })
  }
  toggle = (index) => {
    this.state.indexofDelete = index
    this.state.userId = window.localStorage.getItem("uid")
    if (this.state.userId === undefined || this.state.userId === null) {
      this.setState({ visible: true })
      setTimeout(() => {
        this.setState({
          visible: false
        })
      }, 2000)
    } else {
      this.setState({
        modal: !this.state.modal
      })
    }
  }
  newDate () {
    var nd = new Date()
    var d = nd.getDate()
    var m = nd.getMonth()
    this.state.date = "เสนอเมื่อ " + d + "|" + m
  }
  submit = (e) => {
    const index = this.state.indexofDelete
    if (Topic.value === "" || Description.value === "" || Telno.value === "") {
      this.state.visible3 = true
      setTimeout(() => { this.setState({ visible3: false }) }, 2000)
    } else {
      const Topics = {
        name: this.state.name,
        photo: this.state.photo,
        topic: Topic.value,
        description: Description.value,
        telno: Telno.value,
        date: this.state.date
      }
      try {
        db.ref("/users/" + this.state.userId + "/" + Topics.topic)
          .set({
            name: Topics.name,
            photo: Topics.photo,
            topic: Topics.topic,
            description: Topics.description,
            telno: Topics.telno,
            date: Topics.date
          })
        db.ref("/topics/" + Topics.date + "__" + Topics.name + "__" + Topics.topic)
          .set({
            name: Topics.name,
            photo: Topics.photo,
            topic: Topics.topic,
            description: Topics.description,
            telno: Topics.telno,
            date: Topics.date,
            votecount: 0
          })
        this.deleteTopic(index)
      } catch (e) {
        console.log(e)
      }
    }
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
    this.newDate()
    this.state.userId = window.localStorage.getItem("name")
    this.state.userId = window.localStorage.getItem("img")
    this.state.userId = window.localStorage.getItem("uid")
  }
  componentWillMount () {
    // this.fechData()
  }
  deleteTopic = (index) => {
    const uid = window.localStorage.getItem("uid")
    db.ref("/users/" + uid + "/" + this.state.speakers[index].topic)
      .set({

      })
    db.ref("/topics/" + this.state.speakers[index].date + "__" + this.state.speakers[index].name + "__" + this.state.speakers[index].topic)
      .set({

      })
    window.location.reload()
  }
  editTopic = (index) => {
    this.toggle(index)
  }

  render () {
    return (
      <Fragment>
        {
          this.state.speakers.map((speaker, index) => (
            <Col key={index} sm='4' className='pb-5' >
              <CardSubmit index={index} editTopic={this.editTopic} deleteTopic={this.deleteTopic} speaker={speaker} value={index} />
            </Col>
          ))
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>จะแก้ไขอะไรดีน่ะ ?</ModalHeader>
          <ModalBody >
            <Form>
              <FormGroup>
                <Label for='Topic'>ชื่อหัวข้อ</Label>
                <Input type='text' name='topic' id='Topic' />
              </FormGroup>
              <FormGroup>
                <Label for='Description'>คำอธิบาย</Label>
                <Input type='textarea' name='description' id='Description' />
              </FormGroup>
              <FormGroup>
                <Label for='Telno'>เบอร์โทรศัพท์</Label>
                <Input type='number' name='telno' id='Telno' />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.submit}>ส่งหัวข้อ</Button>{" "}
            <Button color='secondary' onClick={this.toggle}>ยกเลิก</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  }
}

const CardSubmit = ({ speaker: {topic, date}, deleteTopic, index, editTopic }) => (
  <Card >
    <CardBody>
      <CardTitleStyled className='text-center'>{topic}</CardTitleStyled>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <CardSubtitleStyled className='text-left'>{date}</CardSubtitleStyled>
        <div>
          <button type='button' onClick={() => { deleteTopic(index) }} className='btn btn-default mx-1'>
            <span className='glyphicon glyphicon-star'>D</span>
          </button>
          <button type='button' onClick={() => { editTopic(index) }} className='btn btn-default mx-1'>
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
