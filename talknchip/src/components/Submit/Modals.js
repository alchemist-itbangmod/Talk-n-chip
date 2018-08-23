import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert, Form, FormGroup, Label, Input } from "reactstrap"
import Button from "../core/Button"
import { insert } from "../../tools/firebasehelper"
import styled from "styled-components"

const AlertStyled = styled(Alert)`
  padding-left: 10em;
  padding-right: 10em;
`
export default class Modals extends React.Component {
    state = {
      modal: false,
      error: "",
      topic: {}
    }

    handleTopicName = (e) => {
      const { topic } = this.state
      this.setState({
        topic: {
          ...topic,
          title: e.target.value
        }
      })
    }

    handleDescription = (e) => {
      const { topic } = this.state
      this.setState({
        topic: {
          ...topic,
          description: e.target.value
        }
      })
    }

    handleTelno = (e) => {
      const { topic } = this.state
      this.setState({
        topic: {
          ...topic,
          telNo: e.target.value
        }
      })
    }

    onDismiss = () => {
      this.setState({ visible: false })
    }

    toggle = () => {
      const { modal } = this.state
      this.setState({ modal: !modal })
    }

    submit = (e) => {
      e.preventDefault()
      const { topic } = this.state
      if (topic && topic.title && topic.description) {
        insert(`topics/9B0qMcpVH7MDYh80fkkyUoF2IL33/${topic.title}`, this.state.topic)
        this.setState({ error: "" })
      } else {
        this.setState({ error: "กรุณาข้อมูลกรอกให้ครบ" })
      }
    }

    render () {
      const { modal, error } = this.state
      return (
        <Fragment>
          <Button onClick={this.toggle}>เสนอหัวข้อ</Button>
          <Modal isOpen={modal}>
            <Form onSubmit={this.submit}>
              <ModalHeader toggle={this.toggle}>เสนอหัวข้อที่อยากแชร์</ModalHeader>
              <ModalBody >
                <FormGroup>
                  <Label for='Topic'>ชื่อหัวข้อ</Label>
                  <Input onChange={this.handleTopicName} type='text' name='topic' id='Topic' required />
                </FormGroup>
                <FormGroup>
                  <Label for='Description'>คำอธิบาย</Label>
                  <Input onChange={this.handleDescription} type='textarea' name='description' id='Description' required />
                </FormGroup>
                <FormGroup>
                  <Label for='Telno'>เบอร์โทรศัพท์</Label>
                  <Input onChange={this.handleTelno} type='number' name='telno' id='Telno' required />
                </FormGroup>
              </ModalBody>

              { error && <Alert color='danger'> { error } </Alert> }
              <ModalFooter>
                <Button type='submit'>ส่งหัวข้อ</Button>
                <Button color='secondary' onClick={this.toggle}>ยกเลิก</Button>
              </ModalFooter>
            </Form>
          </Modal>
        </Fragment>
      )
    }
}

// db.ref("/users/" + this.state.userId)
// .set({
//   name: Topics.name,
//   photo: Topics.photo,
//   telno: Topics.telno,
//   createAt: Topics.date,
//   updateAt: Topics.date,
//   uid: Topics.uid

// })
// db.ref("/topics/" + this.state.userId + "/" + Topics.topic)
// .set({
//   uid: Topics.uid,
//   topic: Topics.topic,
//   description: Topics.description,
//   createAt: Topics.date,
//   updateAt: Topics.date
// })
// db.ref("/votes/" + this.state.userId + "/" + Topics.topic)
// .set({
//   uid: Topics.uid,
//   topicid: Topics.uid + "_" + Topics.topic,
//   createAt: Topics.date
// })
