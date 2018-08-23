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

import Button, { ButtonOutline } from "../core/Button"

import firebase from "../../credentials/firebase-config"
import { insert, getOne } from "../../tools/firebasehelper"
import { generateUID } from "../../tools/uid"
import { getUser } from "./index"

library.add(fas)

const Modal = styled(DefaultModal)`
  margin-top: 20vh;
  .text-center {
    font-size: 60px;
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
      topic: {
        title: "",
        description: "",
        telNo: ""
      }
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

    toggle = () => {
      const { modal } = this.state
      this.setState({ modal: !modal })
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
          const user = getUser(authUser)
          getOne("users", user.uid).once("value").then(userSnapshot => {
            const user = userSnapshot.val()
            const { topic } = this.state
            if (user && user.telNo) {
              this.setState({
                topic: {
                  ...topic,
                  telNo: user.telNo
                }
              })
            }
          })
        }
      })
    }

    submit = (e) => {
      e.preventDefault()
      const { user } = this.props
      const { topic } = this.state
      if (topic && topic.title && topic.description) {
        if (user.telNo) {
          insert(`topics/${user.uid}/${generateUID()}`, {
            ...this.state.topic,
            telNo: user.telNo,
            createdAt: moment().format()
          })
          insert(`users/${user.uid}`, { ...user, updatedAt: moment().format() })
        } else {
          insert(`topics/${user.uid}/${generateUID()}`, {
            ...this.state.topic,
            createdAt: moment().format()
          })
          getOne("users", user.uid).once("value").then(userSnapshot => {
            const user = userSnapshot.val()
            insert(`users/${user.uid}`, { ...user, telNo: topic.telNo, updatedAt: moment().format() })
          })
        }
        this.setState({ topic: { title: "", description: "", telNo: topic.telNo }, error: "", message: "เสนอหัวข้อสำเร็จ !" })
        this.toggle()
        setTimeout(() => {
          this.setState({ message: "" })
        }, 1500)
      } else {
        this.setState({ error: "กรุณาข้อมูลกรอกให้ครบ" })
      }
    }

    render () {
      const { user } = this.props
      const { topic, modal, error, message } = this.state
      return (
        <Fragment>
          {user.displayName !== "Guest" && <Button onClick={this.toggle}>เสนอหัวข้อ</Button>}
          <Modal isOpen={modal}>
            <Form onSubmit={this.submit}>
              <ModalHeader toggle={this.toggle}>เสนอหัวข้อที่อยากแชร์</ModalHeader>
              <ModalBody >
                <FormGroup>
                  <Label for='Topic'>ชื่อหัวข้อ</Label>
                  <Input value={topic.title} placeholder='กินข้าวกับโค้ดกัน' onChange={this.handleTopicName} type='text' name='topic' id='Topic' required />
                </FormGroup>
                <FormGroup>
                  <Label for='Description'>คำอธิบาย</Label>
                  <Input value={topic.description} placeholder='กินข้าวไปหนึ่งคำ และพิมพ์โค้ด 1 ฟังก์ชั่น' onChange={this.handleDescription} type='textarea' name='description' id='Description' required />
                </FormGroup>
                <FormGroup>
                  <Label for='Telno'>เบอร์โทรศัพท์</Label>
                  <Input value={topic.telNo} placeholder='0123456789' pattern='^[0]{1}[0-9]{9}' onChange={this.handleTelno} type='text' name='telno' id='Telno' required />
                </FormGroup>
              </ModalBody>

              { error && <Alert color='danger'> { error } </Alert> }
              <ModalFooter>
                <ButtonOutline onClick={this.toggle}>ยกเลิก</ButtonOutline>
                <Button type='submit'>ส่งหัวข้อ</Button>
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
