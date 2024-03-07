import { createContext, useState } from "react";

export const LoginContext = createContext({
  userLogged: "",
  toggleLogged: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);

  const toggleLogged = () => {
    setUserLogged(!userLogged);
    console.log("TOGGLELOGGED FUNCTION: " + userLogged);
  };

  return (
    <LoginContext.Provider value={{ userLogged, toggleLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
