import React, { Fragment } from "react"
import styled from "styled-components"
import moment from "moment"
import firebase from "../../credentials/firebase-config"
import { auth, provider, insert, getAll } from "../../tools/firebasehelper"
import { Container, Row, Col, Card } from "reactstrap"

import Button from "../core/Button"
import NavBarLogin from "../core/NavbarSubmit"
import TopicContainer from "./TopicContainer"
import SubmitTopic from "./SubmitTopic"
import Footer from "../Index/Footer"

const getUser = ({ uid, providerData }) => {
  return {
    ...providerData[0],
    uid
  }
}

const MessageContainer = styled(Container)`
  min-height: 75vh;
`

class SubmitPage extends React.Component {
  state = {
    topics: [],
    user: { displayName: "Guest" },
    buttonText: "เข้าสู่ระบบ"
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        const user = getUser(authUser)
        insert(`users/${user.uid}`, { ...user, updatedAt: moment().format() })
        getAll(`topics/${user.uid}`).on("value", topicSnapshot => {
          if (topicSnapshot.val()) {
            this.setState({
              topics: Object.values(topicSnapshot.val())
            })
          }
        })
        this.setState({
          user: {
            ...user
          },
          buttonText: "ออกจากระบบ"
        })
      }
    })
  }
  login = () => {
    const { user } = this.state
    if (user.displayName === "Guest") {
      auth().signInWithPopup(provider).then(userAuth => {
        const user = getUser(userAuth.user)
        insert(`users/${user.uid}`, { ...user, createdAt: moment().format() })
        this.setState({ user: { ...user } })
      })
    } else {
      firebase.auth().signOut().then(() => {
        const user = { displayName: "Guest" }
        this.setState({ user, buttonText: "เข้าสู่ระบบ", topics: [] })
      })
    }
  }

  render () {
    const { user, buttonText, topics } = this.state
    return (
      <Fragment>
        <NavBarLogin login={this.login} user={user} buttonText={buttonText} />
        <SubmitTopic user={user} />
        {
          topics.length > 0 ? <TopicContainer topics={topics} /> : (
            <MessageContainer>
              <Row>
                <Col xs={12}>
                  <Card className='mt-5 py-4 text-center'>
                    <h4>
                      {
                        user.displayName === "Guest"
                          ? <Fragment>{"กรุณา"}<Button className='mx-3' onClick={this.login}>เข้าสู่ระบบ</Button>{"ก่อนเสนอหัวข้อ"}</Fragment>
                          : <Fragment>{"กรุณาเสนอหัวข้อโดยกดปุ่ม \"เสนอหัวข้อ\" ด้านขวาบน"}</Fragment>
                      }
                    </h4>
                  </Card>
                </Col>
              </Row>
            </MessageContainer>
          )
        }
        <Footer />
      </Fragment>
    )
  }
}

export default SubmitPage
