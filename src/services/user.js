export async function getUsers(size = 12, page = 1) {
  const params = {
    results: size,
    page,
  };
  const response = await fetch(
    `https://randomuser.me/api/?${new URLSearchParams(params).toString()}`,
  );
  const json = await response.json();
  return json.results;
}
