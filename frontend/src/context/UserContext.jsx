import { createContext, useContext, useState } from "react";
import StudentApi from "../services/api/student/StudentApi";

export const UserStateContext = createContext({
  user: {},
  setUser: () => {},
  authenticated: false,
  setAuthenticated: () => {},
  logout: () => {},
  login: (email, password) => {},
});

export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem("AUTHENTICATED"));

  const login = async (email, password) => {
    await StudentApi.getCsrfToken();
    return await StudentApi.login(email, password);
  };

  const logout = () => { 
    setUser({});
    setAuthenticated(false);
  };

  const setAuthenticated = (isAuthenticated) => { 
    _setAuthenticated(isAuthenticated);
    window.localStorage.setItem("AUTHENTICATED", isAuthenticated);
  };

  return (
    <UserStateContext.Provider value={{ user, setUser, authenticated, setAuthenticated, login, logout }}>
      {children}
    </UserStateContext.Provider>
  );
}

export const useUserContext = () => useContext(UserStateContext);
