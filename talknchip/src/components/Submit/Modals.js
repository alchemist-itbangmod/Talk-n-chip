import React, { Fragment } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Button from "../core/Button"

export default class Modals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
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
            <Button color='primary' onClick={this.toggle}>ส่งหัวข้อ</Button>{" "}
            <Button color='secondary' onClick={this.toggle}>ยกเลิก</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  }
}
