import React, { Fragment } from "react"
import styled from "styled-components"
import moment from "moment"
import firebase from "../../credentials/firebase-config"
import { auth, provider, insert, getAll, getOne } from "../../tools/firebasehelper"
import { Container, Row, Col, Card } from "reactstrap"

import Button from "../core/Button"
import NavBarLogin from "../core/NavbarSubmit"
import TopicContainer from "./TopicContainer"
import Footer from "../Index/Footer"
import Modals from "./Modals"

export const getUser = ({ uid, providerData }) => {
  return {
    ...providerData[0],
    uid
  }
}

const MessageContainer = styled(Container)`
  min-height: 75vh;
`

const SubmitText = styled.span`
  color: #69302c;
  margin-bottom: 0px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
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
        this.forceUpdate()
      }
    })
  }
  login = async () => {
    const { user } = this.state
    if (user.displayName === "Guest") {
      const userAuth = await auth().signInWithPopup(provider)
      const user = getUser(userAuth.user)
      const userQuery = await getOne("users", user.uid).once("value").then(userSnapshot => {
        const user = userSnapshot.val()
        return user
      })
      console.log(userQuery)
      if (userQuery && userQuery.uid) {
        insert(`users/${user.uid}`, { ...userQuery, updatedAt: moment().format() })
      } else {
        insert(`users/${user.uid}`, { ...user, createdAt: moment().format(), updatedAt: moment().format() })
      }
      this.setState({ user: { ...user } })
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
        <Container className='py-1'>
          <Row>
            <Col className='d-flex justify-content-between align-items-center'>
              <SubmitText>{"หัวข้อที่เสนอของคุณ"}</SubmitText>
              <Modals user={user} />
            </Col>
          </Row>
        </Container>
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
