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
           หัวข้อที่จะเสนอ : <input type='text' name='Title' /><br /><br />
           ลายละเอียด   :   <input type='text' name='Detail' />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Do Something</Button>{" "}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  }
}
