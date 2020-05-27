import React, { useState, FormEvent, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { useIntl } from "react-intl";
import useInput, { validation } from "../../hooks/useInput";

export type LoginData = {
  email: string;
  password: string;
};

type Props = {
  onLogin: (data: LoginData) => void;
};
const LoginForm: React.FC<Props> = ({ onLogin }) => {
  const { formatMessage: f } = useIntl();
  //const { register, handleSubmit, errors } = useForm<LoginData>();
  const email = useInput(validation({ isRequired: "Email is required" }));
  const password = useInput(validation({ isRequired: "Password is required" }));

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.isValid() && password.isValid()) {
      console.log(email, password);
    }
  };

  return (
    <form
      data-testid="LoginForm"
      className="flex flex-col max-w-sm mx-auto bg-card rounded p-4"
      onSubmit={handleLogin}
    >
      <h1 className="font-medium text-2xl mb-4">{f({ id: "LOGIN_TITLE" })}</h1>
      <div className="py-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={email.value}
          onChange={email.handleChange}
          className="p-2 border border-muted-light bg-page"
          placeholder="email@example.com"
        />
        {email.error && (
          <div className="text-error mt-1">Must enter a valid email</div>
        )}
      </div>
      <div className="py-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password.value}
          onChange={password.handleChange}
          className="p-2 border border-muted-light my-1 bg-page"
          placeholder="Password here"
        />
        {password.error && (
          <div className="text-error mt-1">
            Password must have at least 4 characters
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center">
        <button className="btn" type="submit">
          Login
        </button>
        <Link className="ml-4" to={routes.recoverPassword()}>
          Forgot password
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
