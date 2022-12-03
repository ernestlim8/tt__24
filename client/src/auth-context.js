import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  id: "",
  isLoggedIn: false,
  login: (id) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialId = localStorage.getItem("id");
  const [id, setId] = useState(initialId);

  const userIsLoggedIn = !!id;

  const logoutHandler = () => {
    setId(null);
    localStorage.removeItem("id");
  };

  const loginHandler = (id) => {
    setId(id);
    localStorage.setItem("id", id);
  };

  const contextValue = {
    id: id,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;