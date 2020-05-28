type Environment = "development" | "production";

type Config = {
  env: Environment;
  apiUrl: string;
};

const env: Environment =
  process.env.NODE_ENV === "development" ? "development" : "production";

const CONFIG: Record<Environment, Config> = {
  development: {
    env,
    apiUrl: "http://localhost:1338",
  },
  production: {
    env,
    apiUrl: "https://jsonplaceholder.typicode.com",
  },
};

export default CONFIG[env];
