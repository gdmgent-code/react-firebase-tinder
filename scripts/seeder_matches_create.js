
import { admin, app, db, generateTimestampsDuringCreate, generateValueBetweenMinAndMax } from './firebase';

/*
* Create a user in firestore
*/
const createMatch = async (userId, friendId, status) => {
  const match = {
    userId,
    friendId,
    status,
    ...generateTimestampsDuringCreate
  }

  const matchesRef = db.collection("matches");
  return await matchesRef.add(match);
}

(async () => {
 
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map((doc) => {
      return {uid: doc.id, ...doc.data()};
    });

    users.forEach(async (user, index) => {  
      const usersCopy = JSON.parse(JSON.stringify(users));
      usersCopy.splice(usersCopy.findIndex((friend) => friend.uid == user.uid));
      for (let i = 0;i < generateValueBetweenMinAndMax(5, 20);i++) { 
        if (usersCopy.length == 0) {
          break;
        }       
        const friendIndex = Math.floor(Math.random()*usersCopy.length);
        const friend = usersCopy[friendIndex];
        await createMatch(user.uid, friend.uid, generateValueBetweenMinAndMax(-1, 2));
                
        usersCopy.splice(friendIndex);
      }
    });
  } catch (err) {
    console.log(err);
  }
})();