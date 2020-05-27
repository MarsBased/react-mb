import React, { useContext, createContext } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

type UserData = { name: string; id: string; admin: boolean };
type LoggedIn = { loggedIn: true } & UserData;
type Anonymous = { loggedIn: false } & UserData;
type UserState = LoggedIn | Anonymous;

type SetUser = (user?: Partial<UserData>) => void;

type UserContextState = { user: UserState; setUser: SetUser };

export const UserContext = createContext<UserContextState>({
  user: getUserState(),
  setUser: () => undefined,
});

const useUser = () => useContext(UserContext);

export default useUser;

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUserState] = useLocalStorageState<UserState>(
    "user",
    getUserState({})
  );

  const setUser = (data: any) => setUserState(getUserState(data));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

function getUserState(data: any = {}): UserState {
  const hasUser = data.id && data.name;
  return hasUser
    ? {
        loggedIn: true,
        id: data.id,
        name: data.name,
        admin: data.admin === true,
      }
    : {
        loggedIn: false,
        name: "",
        id: "",
        admin: false,
      };
}
