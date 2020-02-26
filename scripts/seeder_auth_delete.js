import { admin, app, db } from './firebase';

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
        await deleteAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
}

/*
* Anonymous function
*/
(async () => {
  try {
    await deleteAllUsers();
  } catch (err) {
    console.log(err);
  }
})();