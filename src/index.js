import { getUsers } from './services/user';
import { renderUser } from './renderUser';

(async () => {
  const app = document.getElementById('app');
  const users = await getUsers(12);

  users.forEach(user => {
    app.appendChild(renderUser(user));
  });
})();
