import firebase from "../credentials/firebase-config"

const ref = "talknchip"

const db = firebase.database()

const getAll = (collection) => {
  if (collection) {
    return db.ref(`${ref}/${collection}`)
  }
  return db.ref(`${ref}`)
}

const getOne = (attr, whereCause) => db.ref(`${ref}/${attr}/${whereCause}`)

const insert = (uid, value, cb) => db.ref(`${ref}/${uid}`).set({ ...value }, cb)

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
