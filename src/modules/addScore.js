/* eslint-disable no-console */

const jeddaGameId = 'h3JR6fD5buUEu3ZSaXws';

export default () => {
  const submitBtn = document.querySelector('.submit-form');

  submitBtn.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('.username').value;
    const userscore = document.querySelector('.userscore').value;
    try {
      await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${jeddaGameId}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
          user: username,
          score: userscore,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const refresh = document.querySelector('.refresh-btn');
      refresh.click();
    } catch (e) {
      console.error('Error adding new score:', e);
    }
    document.querySelector('.username').value = '';
    document.querySelector('.userscore').value = '';
  });
};
