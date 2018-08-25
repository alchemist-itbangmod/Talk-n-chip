import React, { Fragment } from "react"
import moment from "moment"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap"
import firebase from "../../credentials/firebase-config"
import { auth, provider, insert, getAll, getOne } from "../../tools/firebasehelper"
import { getUser } from "../Submit/index"

import NavBarLogin from "../core/NavbarSubmit"

import Footer from "../Index/Footer"
import VoteTopic from "./VoteTopic"
import CardVote from "./CardVote"

class VotePage extends React.Component {
  state = {
    topics: [],
    user: { displayName: "Guest" },
    buttonText: "เข้าสู่ระบบ"
  }
  login = () => {
    const { user } = this.state
    if (user.displayName === "Guest") {
      auth().signInWithPopup(provider).then(userAuth => {
        const user = getUser(userAuth.user)
        const userQuery = getOne("users", user.uid).once("value").then(userSnapshot => {
          const user = userSnapshot.val()
          return user
        })
        if (userQuery && userQuery.uid) {
          insert(`users/${user.uid}`, { ...userQuery, updatedAt: moment().format() })
        } else {
          insert(`users/${user.uid}`, { ...user, createdAt: moment().format(), updatedAt: moment().format() })
        }
        this.setState({ user: { ...user } })
      })
    } else {
      firebase.auth().signOut().then(() => {
        const user = { displayName: "Guest" }
        this.setState({ user, buttonText: "เข้าสู่ระบบ" })
      })
    }
  }

  componentDidMount () {
    getAll("topics").on("value", topicSnapshot => {
      if (topicSnapshot.val()) {
        this.setState({
          topics: Object.values(topicSnapshot.val())
        })
      }
    })
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        const user = getUser(authUser)
        this.setState({
          user: {
            ...user
          },
          buttonText: "ออกจากระบบ"
        })
      }
    })
  }
  render () {
    const { user, topics, buttonText } = this.state
    return (
      <Fragment>
        <NavBarLogin login={this.login} user={user} buttonText={buttonText} />
        <VoteTopic />
        <Container>
          <Row>
            {
              topics.length > 0 ? topics.map((nestedTopic) => (
                Object.values(nestedTopic).map((topic, index) => (
                  <Col key={index} xs={12} lg={4} className='pb-5' >
                    <CardVote topic={topic} value={index} />
                  </Col>
                )
                )
              ))
                : <Col>
                  <Card className='mb-5'>
                    <CardBody className='text-center'>
                      <h3>กำลังโหลด...</h3>
                    </CardBody>
                  </Card>
                </Col>
            }
          </Row>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default VotePage
