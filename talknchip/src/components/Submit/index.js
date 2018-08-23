import React, { Fragment } from "react"

import NavBarLogin from "../Core/NavbarSubmit.js"
import Footer from "../Index/Footer"
import Card from "./Card"
import SubmitTopic from "./SubmitTopic"

class SubmitPage extends React.Component {
  render () {
    return (
      <Fragment>
        <NavBarLogin />
        <SubmitTopic />
        <Card />
        <Footer />
      </Fragment>
    )
  }
}

export default SubmitPage
