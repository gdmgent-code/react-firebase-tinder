import * as admin from 'firebase-admin';

const serviceAccount = require("./key.json");
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pgm-website-ahs.firebaseio.com"
});

/*
* Firestore database
*/
const db = app.firestore();

/*
* Generate Timestamps
*/
const generateTimestampsDuringCreate = () => {
  return {
    _createdAt: Date.now(),
    _updatedAt: null,
    _deletedAt: null
  }
}

/*
* Generate Integer between min and max
*/
const generateValueBetweenMinAndMax = (min, max) => {
  return min + Math.round(Math.random()*(max - min));
}

/*
* Exports
*/
export {
  admin,
  app,
  db,
  generateTimestampsDuringCreate,
  generateValueBetweenMinAndMax,
}