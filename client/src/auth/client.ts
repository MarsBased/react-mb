const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

export async function login(email: string, password: string) {
  await delay(250);

  return Promise.resolve({
    name: "Grace Hopper",
    id: "1",
    token: "JWT_TOKEN",
    admin: true,
  });
}

export async function logout() {
  await delay(250);
  return Promise.resolve({});
}
