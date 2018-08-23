import React, { Fragment } from "react"
import Header from "../Submit/LoginSection"
import Footer from "../Index/Footer"
import VoteTopic from "./VoteTopic"
import CardVote from "./CardVote"
class VotePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Header />
        <VoteTopic />
        <CardVote />
        <Footer />
      </Fragment>
    )
  }
}

export default VotePage
