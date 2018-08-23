import React, { Fragment } from "react"
import moment from "moment"
import styled from "styled-components"
import {
  Modal as DefaultModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"

import Button from "../core/Button"
import { insert } from "../../tools/firebasehelper"
import { generateUID } from "../../tools/uid"

library.add(fas)

const Modal = styled(DefaultModal)`
  margin-top: 20vh;
  .text-center {
    font-size: 100px;
  }
  svg {
    color: #5dca00;
  }
`

export default class Modals extends React.Component {
    state = {
      modal: false,
      message: "",
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
      const { user } = this.props
      const { topic } = this.state
      if (topic && topic.title && topic.description) {
        insert(`topics/${user.uid}/${generateUID()}`, {
          ...this.state.topic,
          createdAt: moment().format()
        })
        this.setState({ error: "", message: "เสนอหัวข้อสำเร็จ !" })
        this.toggle()
        setTimeout(() => {
          this.setState({ message: "" })
        }, 1500)
      } else {
        this.setState({ error: "กรุณาข้อมูลกรอกให้ครบ" })
      }
    }

    render () {
      const { modal, error, message } = this.state
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
          {message && <Modal isOpen={message !== ""}>
            <ModalBody>
              <div className='text-center'>
                <FontAwesomeIcon icon='check-circle' />
                <h1>{message}</h1>
              </div>
            </ModalBody>
          </Modal>}
        </Fragment>
      )
    }
}
