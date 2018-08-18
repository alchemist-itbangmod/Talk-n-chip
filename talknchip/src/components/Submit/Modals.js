import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Button from "../core/Button"
import firebase, {db, getAll, getOne, insert, auth, provider } from "../../tools/firebasehelper"

export default class Modals extends React.Component {
    state = {
      modal: false,
      userId: "nologin",
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
      if (this.state.user === null) {
        auth().signInWithPopup(provider)
          .then(({ user }) => {
            // user = JSON.stringify(user)
            // windowChecker() && window.localStorage.setItem("user", user)
            // user = JSON.parse(user)
            console.log("user", user)
            db.ref(`/users/${user.uid}`)
              .set({
                name: user.displayName,
                // email: user.email,
                photoURL: user.photoURL
              })
            // this.setState({ user })
            this.state.userId = user.uid
            window.localStorage.setItem("uid", user.uid)
            window.localStorage.setItem("name", user.displayName)
            window.localStorage.setItem("img", user.photoURL)
          })
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
          this.setState({
            isOpen: false
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
