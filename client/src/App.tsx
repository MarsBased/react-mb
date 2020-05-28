import React from "react";
import Router from "./Router";
import { ThemeProvider } from "./hooks/useTheme";
import { UserProvider } from "./hooks/useUser";
import { LocaleProvider } from "./hooks/useLocale";

const App: React.FC = () => {
  console.log("RENDER", App.name);
  return (
    <UserProvider>
      <ThemeProvider>
        <LocaleProvider>
          <Router />
        </LocaleProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
