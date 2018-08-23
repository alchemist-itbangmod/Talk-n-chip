import firebase from "../credentials/firebase-config"

const db = firebase.database()

const getAll = (collection) => db.ref(`${collection}`)

const getOne = (collection, attr, whereCause) => db.ref(`${collection}/${attr}/${whereCause}`)

const insert = (collection, value) => db.ref(`${collection}`).set({ ...value })

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
