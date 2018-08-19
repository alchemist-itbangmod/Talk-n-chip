import firebase from "../credentials/firebase-config"

const ref = "talk-n-chip"
const db = firebase.database()

const getAll = (collection) => {
  if (collection) {
    return db.ref(`${collection}`)
  }
  return db.ref(`${ref}`)
}

const getOne = (attr, whereCause) => db.ref(`${ref}/${attr}/${whereCause}`)

const insert = (uid, value) => db.ref(`${ref}/${uid}`).set({ ...value })

db.ref("/test")
  .once("value")
  .then(snap => {
  })
  .catch(err => {
    console.error(err)
  })

const auth = firebase.auth

const provider = new firebase.auth.FacebookAuthProvider()

export {
  db,
  getAll,
  getOne,
  insert,
  auth,
  provider
}
