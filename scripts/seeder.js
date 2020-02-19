import fetch from 'node-fetch';
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
* Get random users from the RandomUserMe service API
*/
const getRandomUsers = async (amount) => {
  const url = `https://randomuser.me/api/?results=${amount}`;

  const response = await fetch(url);
  const json = await response.json();
  const data = json.results;
  return data;
}


/*
* Create user in firebase authentication
*/
const createUserWithEmailAndPassword = async (email, password) => {
  return await app.auth().createUser({
    email,
    password
  });
}

/*
* Delete all users from firebase
*/
const deleteAllUsers = async (nextPageToken) => {
  admin.auth().listUsers(100, nextPageToken)
    .then(async (listUsersResult) => {
      listUsersResult.users.forEach(async (userRecord, index) => {
        const userJson = userRecord.toJSON();
        const uid = userJson.uid;
        const promise = await admin.auth().deleteUser(uid);
      });
      if (listUsersResult.pageToken) {
        deleteAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
}


/*
* Create a user in firestore
*/
const createUser = async (userId, randomUser) => {
  const user = {
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    locations: [
      {
        street: randomUser.location.street.name,
        nr: randomUser.location.street.number,      
        postcode: randomUser.location.postcode,
        city: randomUser.location.city,
        state: randomUser.location.state,
        country: randomUser.location.country,
        type: 'home',
        geolocation: {
          latitude: randomUser.location.coordinates.latitude,
          longitude: randomUser.location.coordinates.longitude,
        }
      }
    ],
    dayOfBirth: admin.firestore.Timestamp.fromDate(new Date(randomUser.dob.date)),
    gender: randomUser.gender,
    nationality: randomUser.nat,
    email: randomUser.email,    
    phone: randomUser.phone,
    cell: randomUser.cell,
    profilePicture: randomUser.picture.large,
    userId: userId,
  }

  const usersRef = db.collection("users");
  return await usersRef.doc(userId).set(user);
}

(async () => {
 
  try {
    await deleteAllUsers();
    const randomUsers = await getRandomUsers(50);
    randomUsers.forEach(async (randomUser) => {
      const userRecord = await createUserWithEmailAndPassword(randomUser.email, 'gdmgent007');
      const userJson = userRecord.toJSON();
      createUser(userJson.uid, randomUser);
    });

  } catch (err) {
    console.log(err);
  }
})();