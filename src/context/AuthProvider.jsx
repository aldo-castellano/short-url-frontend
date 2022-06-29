import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ hola: "hola" });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
