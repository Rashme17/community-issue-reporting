// src/context/AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("loggedInUser");
    return data ? JSON.parse(data) : null;
  });

  const navigate = useNavigate();

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find((u) => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem("loggedInUser", JSON.stringify(found));
      navigate(found.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
