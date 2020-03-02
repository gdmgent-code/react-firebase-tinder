import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestampsDuringCreate, generateValueBetweenMinAndMax } from './firebase';

/*
* Create a user in firestore
*/
const createChatMessage = async (senderId, receiverId, message) => {
  const chatMessage = {
    senderId: senderId,
    receiverId: receiverId,
    message: message,
    ...generateTimestampsDuringCreate
  };

  return await db.collection('chats').doc(`${senderId}${receiverId}`).collection('messages').doc(uuidv4()).set(chatMessage);
}

(async () => {
 
  try {
    const matchesRef = db.collection('matches');
    const snapshot = await matchesRef.get();
    const matches = snapshot.docs.map((doc) => {
      return {uid: doc.id, ...doc.data()};
    });

    matches.forEach(async (match, index) => {  
      for (let i = 0;i < generateValueBetweenMinAndMax(1, 5);i++) { 
        await createChatMessage(match.userId, match.friendId, 'vvhfjgdsjfds fhdsjhfjdshkhfds hfjsdhkfdhjkfdshk');
      } 
    });

  } catch (err) {
    console.log(err);
  }
})();