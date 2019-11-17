import { getUsers } from './services/user';

(async () => {
  const users = await getUsers(12);
  console.table(users);
})();
