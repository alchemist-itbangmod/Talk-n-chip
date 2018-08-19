import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap"
import Button from "../core/Button"
import firebase, {db, getAll, getOne, insert, auth, provider } from "../../tools/firebasehelper"
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
      topic: {
        studentId: "",
        topicName: "",
        description: "",
        telno: ""
      },
      isOpen: false,
      message: ""
    }
    toggle = this.toggle.bind(this)

    onDismiss = this.onDismiss.bind(this)

    onDismiss () {
      this.setState({ visible: false })
    }
    toggle () {
      console.log("wellcome ID :" + this.state.userId)
      if (this.state.userId === undefined || this.state.userId === null) {
        this.setState({ visible: true })
        setTimeout(() => {
          console.log("timeout!")
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
    submit = (e) => {
      e.preventDefault()
      const { user, topic } = this.state
      firebase.insert(`topics/${user.uid}`, {
        ...topic,
        displayName: user.displayName,
        photoURL: user.photoURL
      }, (error) => {
        if (error) {
          this.setState({
            isOpen: true,
            message: "ส่งข้อมูลไม่สำเร็จ กรุณาติดต่อที่แฟนเพจ เพื่อแจ้งปัญหา",
            color: "danger"
          })
        } else {
          this.setState({
            isOpen: true,
            message: "ส่งข้อมูลสำเร็จ",
            color: "success"
          })
        }
        setTimeout(() => {
          console.log("timeout!")
          this.setState({
            isOpen: false,
            visible: false
          })
        }, 1700)
      })
    }
    componentDidMount () {
      this.state.userId = window.localStorage.getItem("uid")
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
           หัวข้อที่จะเสนอ : <br /><input type='text' name='Title' size='50' /><br /><br />
           ลายละเอียด   : <br /><textarea name='Detail' rows='5' cols='50' /><br /><br />
           เบอร์โทรศัพท์  : <br /><input type='nember' name='Tel' size='50' /><br /><br />
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={this.submit}>ส่งหัวข้อ</Button>{" "}
              <Button color='secondary' onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      )
    }
}
