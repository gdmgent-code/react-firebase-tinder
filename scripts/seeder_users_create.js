import fetch from 'node-fetch';
import { admin, app, db, generateTimestampsDuringCreate } from './firebase';

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
    ...generateTimestampsDuringCreate
  }

  const usersRef = db.collection("users");
  return await usersRef.doc(userId).set(user);
}

(async () => {
 
  try {
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