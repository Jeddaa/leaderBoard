/* eslint-disable consistent-return */
/* eslint-disable no-console */

export default () => {
  const refresh = document.querySelector('.refresh-btn');
  refresh.addEventListener('click', async () => {
    const gameId = localStorage.getItem('gameId');
    const list = document.querySelector('.list-ul');
    list.innerHTML = '';
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);

      const newData = await response.json();

      newData.result.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.textContent = `${score.user}: ${score.score}`;
        list.appendChild(listItem);
      });
    } catch (e) {
      console.error('Error adding new score:', e);
    }
  });
};
