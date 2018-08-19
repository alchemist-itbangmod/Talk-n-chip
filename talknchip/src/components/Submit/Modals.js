import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert, Form, FormGroup, Label, Input } from "reactstrap"
import Button from "../core/Button"
import { db } from "../../tools/firebasehelper"
import styled from "styled-components"

const AlertStyled = styled(Alert)`
  padding-left: 10em;
  padding-right: 10em;
`
export default class Modals extends React.Component {
    state = {
      modal: false,
      userId: undefined,
      visible: false,
      visible2: false,
      topicName: "",
      description: "",
      telno: "",
      isOpen: false,
      message: "",
      name: "",
      photo: "",
      date: null

    }
    toggle = this.toggle.bind(this)
    onDismiss = this.onDismiss.bind(this)
    onDismiss () {
      this.setState({ visible: false })
      this.setState({ visible2: false })
    }
    toggle () {
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
      this.state.date = "เสนอเมื่อ" + d + "/" + m
    }
    submit = (e) => {
      this.setState({
        topicName: Topic.value,
        description: Description.value,
        telno: Telno.value
      })
      const Topics = {
        name: this.state.name,
        photo: this.state.photo,
        topic: Topic.value,
        description: Description.value,
        telno: Telno.value,
        date: this.state.date
      }
      db.ref("/users/" + this.state.userId)
        .set({
          name: Topics.name,
          photo: Topics.photo,
          topic: Topics.topic,
          description: Topics.description,
          telno: Topics.telno,
          date: Topics.date
        })
      this.state.visible2 = true
      setTimeout(() => {
        this.setState({
          visible2: false,
          modal: false
        })
      }, 2000)
    }
    senddatatoFirebase () {

    }
    componentDidMount () {
      this.state.userId = window.localStorage.getItem("uid")
      this.state.name = window.localStorage.getItem("name")
      this.state.photo = window.localStorage.getItem("img")
      this.newDate()
    }
    render () {
      return (
        <Fragment>
          <AlertStyled color='dark' isOpen={this.state.visible} toggle={this.onDismiss}>
         โปรด login ก่อนจะส่งหัวข้อน่ะ!!
          </AlertStyled>

          <Button color='danger' onClick={this.toggle}>{this.props.buttonLabel}เสนอหัวข้อใหม่</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>จะเสนออะไรดีน่ะ ?</ModalHeader>
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
            <AlertStyled color='success' isOpen={this.state.visible2} toggle={this.onDismiss}>
                 ส่งหัวข้อสุดชิบสำเร็จ
            </AlertStyled>
            <ModalFooter>
              <Button color='primary' onClick={this.submit}>ส่งหัวข้อ</Button>{" "}
              <Button color='secondary' onClick={this.toggle}>ยกเลิก</Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      )
    }
}
