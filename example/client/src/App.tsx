import React from "react";
import Router from "./Router";
import { IntlProvider } from "react-intl";
import en from "./locales/en-GB";

const App: React.FC = () => {
  console.log("RENDER", App.name);
  return (
    <IntlProvider locale="en" messages={en}>
      <Router />
    </IntlProvider>
  );
};

export default App;
