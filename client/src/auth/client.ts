export async function login(email: string, password: string) {
  await new Promise((resolve) => setTimeout(() => resolve(), 250));

  return Promise.resolve({
    name: "Grace Hopper",
    id: "1",
    token: "JWT_TOKEN",
    admin: true,
  });
}
