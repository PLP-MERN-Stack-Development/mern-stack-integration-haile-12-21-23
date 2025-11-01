import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((res) => setUser(res.data))
        .catch(() => {
          setUser(null), setToken(null);
          localStorage.removeItem("token");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);
  const loginUser = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
