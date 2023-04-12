/* eslint-disable comma-dangle */
import './style.css';
import getGameId from './modules/getGameId.js';
import addScore from './modules/addScore.js';
import getScores from './modules/getScores.js';
import refreshScore from './modules/refreshScore.js';

// async function getGameId() {
//   let myId;
//   try {
//     const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'My new game',
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//     myId = data;
//   } catch (err) {
//     return err;
//   }
//   return myId;
// }

// const id = getGameId().then((data) => {
//   console.log(data);
// });

// async function getScores() {
//   const data = await getGameId();
//   try {
//     const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${data}/scores/`, {
//       method: 'POST',
//       body: JSON.stringify({
//         user: 'Jane',
//         score: 42,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const newData = await response.json();
//     console.log(newData);
//     return newData;
//   } catch (e) {
//     return e;
//   }
// }
getGameId();
getScores();
addScore();
refreshScore();
