import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Button from "../core/Button"
import firebase from "../../credentials/firebase-config"

export default class Modals extends React.Component {
    state = {
      modal: false,
      user: null,
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

    toggle () {
      this.setState({
        modal: !this.state.modal
      })
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
          this.setState({
            isOpen: false
          })
        }, 1700)
      })
    }

    render () {
      return (
        <Fragment>
          <Button color='danger' onClick={this.toggle}>{this.props.buttonLabel}เสนอหัวข้อใหม่</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>จะเสนออะไรดีน่ะ ?</ModalHeader>
            <ModalBody >
           หัวข้อที่จะเสนอ : <br /><input type='text' name='Title' /><br /><br />
           ลายละเอียด   : <br /><input type='text' name='Detail' /><br /><br />
           เบอร์โทรศัพท์  : <br /><input type='nember' name='Tel' /><br /><br />
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
