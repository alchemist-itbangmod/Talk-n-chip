import React, { Fragment } from "react"
import styled from "styled-components"
import { db, getAll } from "../../tools/firebasehelper"
import Button from "../core/Button"
import { Card, CardBody, CardTitle, CardSubtitle, Alert, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap"
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

class SpeakerContainer extends React.Component {
  state = {
    topics: [],
    speakers: [],
    visible: false,
    visible2: false,
    modal: false,
    isOpen: false,
    userId: undefined,
    name: "",
    photo: "",
    updateDate: null,
    indexofDelete: 0,
    voteCount: 0
  }
  onDismiss = this.onDismiss.bind(this)
  onDismiss () {
    this.setState({ visible: false, visible2: false })
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
    this.state.updateDate = "เสนอเมื่อ " + d + "|" + m
  }
  submit = (e) => {
    console.log("hit")
    e.preventDefault()
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
        createAt: this.state.speakers[index].createAt,
        updateAt: this.state.updateDate,
        uid: this.state.userId

      }
      try {
        db.ref("/users/" + this.state.userId)
          .set({
            name: Topics.name,
            photo: Topics.photo,
            telno: Topics.telno,
            createAt: Topics.createAt,
            updateAt: Topics.updateAt,
            uid: Topics.uid
          })

        if (Topics.topic !== this.state.speakers[index].topic) {
          db.ref("/topics/" + this.state.userId + "/" + this.state.speakers[index].topic)
            .set({
            })
          db.ref("/votes/" + this.state.userId + "/" + this.state.speakers[index].topic)
            .set({
            })
        } db.ref("/topics/" + this.state.userId + "/" + Topics.topic)
          .set({
            topic: Topics.topic,
            description: Topics.description,
            createAt: Topics.createAt,
            updateAt: Topics.updateAt,
            uid: Topics.uid
          })
        this.state.visible = true
        setTimeout(() => { this.setState({ visible: false, modal: false }) }, 2000)
      } catch (e) {
        console.log(e)
      }
    }
  }
  fechData = () => {
    const uid = window.localStorage.getItem("uid")

    if (uid === null || uid === undefined) {
      this.setState({ visible2: true })
    } else {
      try {
        getAll("topics/" + uid + "/").on("value", topicsnap => {
          try {
            let speakers = Object.values(topicsnap.val())
            this.setState({ speakers })
          } catch (e) {

          }
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
    this.state.name = window.localStorage.getItem("name")
    this.state.photo = window.localStorage.getItem("img")
    this.state.userId = window.localStorage.getItem("uid")
  }
  componentWillMount () {
    // this.fechData()
  }
  deleteTopic = (index) => {
    db.ref("/topics/" + this.state.userId + "/" + this.state.speakers[index].topic)
      .set({
      })
    db.ref("/votes/" + this.state.userId + "/" + this.state.speakers[index].topic)
      .set({
      })
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
        <Col className='justify-content-center'>
          <Alert className='text-center' color='danger' isOpen={this.state.visible2} toggle={this.onDismiss}>
             ต้อง Login ก่อนถึงจะเห็นหัวข้อน่ะ!!
          </Alert>
        </Col>
        <Form onSubmit={this.submit}>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>จะแก้ไขอะไรดีน่ะ ?</ModalHeader>
            <ModalBody >
              <FormGroup>
                <Label for='Topic'>ชื่อหัวข้อ</Label>
                <Input type='text' name='topic' id='Topic' required />
              </FormGroup>
              <FormGroup>
                <Label for='Description'>คำอธิบาย</Label>
                <Input type='textarea' name='description' id='Description' />
              </FormGroup>
              <FormGroup>
                <Label for='Telno'>เบอร์โทรศัพท์</Label>
                <Input type='number' name='telno' id='Telno' />
              </FormGroup>
            </ModalBody>
            <Alert color='success' isOpen={this.state.visible} toggle={this.onDismiss}>
                 ส่งหัวข้อสุดชิบสำเร็จ
            </Alert>
            <ModalFooter>
              <input type='submit' onClick={this.submit} />
              <Button color='secondary' onClick={this.toggle}>ยกเลิก</Button>
            </ModalFooter>
          </Modal>
        </Form>
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
            <div>
              <FontAwesomeIcon icon='trash' />
            </div>
          </button>
          <button type='button' onClick={() => { editTopic(index) }} className='btn btn-default mx-1'>
            <div>
              <FontAwesomeIcon icon='pen' />
            </div>
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
