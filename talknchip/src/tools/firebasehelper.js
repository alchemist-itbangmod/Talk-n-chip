import firebase from "../credentials/firebase-config"

const ref = "talk-n-chip"
const db = firebase.database()

const getAll = (collection) => {
  if (collection) {
    return db.ref(`${ref}/${collection}`)
  }
  return db.ref(`${ref}`)
}

// const getOne = (attr)

const getOne = (attr, whereCause) => db.ref(`${ref}/${attr}/${whereCause}`)

const insert = (uid, value, cb) => db.ref(`${ref}/${uid}`).set({ ...value }, cb)

// db.ref("/users/190")
//   .set({
//     name: "test"
//   })

db.ref("/test")
  .once("value")
  .then(snap => {
    console.log("21", snap.val())
    // const data = Object.values(snap.val())
    // console.log(data)
    console.log(snap)
  })
  .catch(err => {
    console.error(err)
  })

const auth = firebase.auth

const provider = new firebase.auth.FacebookAuthProvider()

// firebase.auth().signInWithPopup(provider)
//   .then(({ user }) => {
//     // user = JSON.stringify(user)
//     // windowChecker() && window.localStorage.setItem("user", user)
//     // user = JSON.parse(user)
//     console.log("user", user)
//     db.ref(`/users/${user.uid}`)
//       .set({
//         name: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL
//       })
//     // this.setState({ user })
//   })

export {
  db,
  getAll,
  getOne,
  insert,
  auth,
  provider
}
