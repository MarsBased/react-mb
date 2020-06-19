const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

export async function login(email: string, password: string) {
  await delay(250);
  return Promise.resolve({
    name: email.split("@")[0],
    id: "1",
    token: "JWT_TOKEN",
    admin: email.indexOf("admin") !== -1,
  });
}

export async function logout() {
  await delay(250);
  return Promise.resolve({});
}
