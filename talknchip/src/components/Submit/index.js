import React, { Fragment } from 'react'
import Header from './LoginSection'
import Card from './Card'
import SubmitTopic from "./SubmitTopic";
import Footer from "../Index/Footer"
import LoginSection from "./LoginSection"

class SubmitPage extends React.Component {
  render () {
    return (
      <Fragment>
        <LoginSection/>
        <SubmitTopic/>
        <Card/>
        <Footer />
      </Fragment>
       
    )
  }
}

export default SubmitPage
