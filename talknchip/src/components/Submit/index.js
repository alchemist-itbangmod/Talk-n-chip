import React, { Fragment } from "react"
import moment from "moment"
import firebase from "../../credentials/firebase-config"
import { auth, provider, insert, getAll } from "../../tools/firebasehelper"

import TopicContainer from "./TopicContainer"
import NavBarLogin from "../Core/NavbarSubmit"
import SubmitTopic from "./SubmitTopic"
import Footer from "../Index/Footer"

const getUser = ({ uid, providerData }) => {
  return {
    ...providerData[0],
    uid
  }
}

class SubmitPage extends React.Component {
  state = {
    topics: [],
    user: { displayName: "Guest" },
    buttonText: "เข้าสู่ระบบ"
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(async authUser => {
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
  login = async () => {
    const { user } = this.state
    if (user.displayName === "Guest") {
      const userAuth = await auth().signInWithPopup(provider)
      const user = getUser(userAuth.user)
      insert(`users/${user.uid}`, { ...user, createdAt: moment().format() })
      this.setState({ user: { ...user } })
    } else {
      firebase.auth().signOut().then(() => {
        const user = { displayName: "Guest" }
        this.setState({ user, buttonText: "เข้าสู่ระบบ" })
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
          topics.length > 0 ? <TopicContainer topics={topics} /> : <div>กรุณา Login หรือส่งหัวข้อ</div>
        }
        <Footer />
      </Fragment>
    )
  }
}

export default SubmitPage
