export async function getUsers(size = 12, page = 1) {
  const params = {
    results: size,
    page,
    nat: 'US',
  };
  const userResp = await fetch(
    `https://randomuser.me/api/?${new URLSearchParams(params).toString()}`,
  );
  const loremResp = await fetch(
    `https://baconipsum.com/api/?type=all-meat&format=text&paras=${12}`,
  );
  const json = await userResp.json();
  const paragraphs = (await loremResp.text()).split('\n\n');
  return json.results.map((user, idx) => ({
    ...user,
    lorem: paragraphs[idx],
  }));
}
