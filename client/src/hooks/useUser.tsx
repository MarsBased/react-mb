import React, { createContext, useContext } from "react";
import useLocalStorageState from "./useLocalStorageState";

type User = {
  id: string;
  name: string;
  admin: boolean;
};

type UserContextState = {
  user?: User;
  setUser: (user?: User) => void;
};

const UserContext = createContext<UserContextState>({
  user: undefined,
  setUser: () => undefined,
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorageState<User | undefined>(
    "USER",
    undefined
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
