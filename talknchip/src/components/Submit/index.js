import React, { Fragment } from 'react'
import Header from './LoginSection'
import Card from './Card'
import SubmitTopic from "./SubmitTopic";
import Footer from "../Index/Footer"

class SubmitPage extends React.Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <Card/>
      </Fragment>
        <SubmitTopic />
        <Footer />
    )
  }
}

export default SubmitPage
