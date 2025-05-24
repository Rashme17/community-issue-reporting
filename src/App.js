// src/App.js
import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./styles/common.css";


const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 15 }}>Home</Link>
      {!user && (
        <>
          <Link to="/login" style={{ marginRight: 15 }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {user && user.role === "user" && (
        <>
          <Link to="/user-dashboard" style={{ marginRight: 15 }}>Dashboard</Link>
          <Link to="/report-issue" style={{ marginRight: 15 }}>Report Issue</Link>
          <button onClick={logout} style={{ marginLeft: 20 }}>Logout</button>
        </>
      )}
      {user && user.role === "admin" && (
        <>
          <Link to="/admin-dashboard" style={{ marginRight: 15 }}>Admin Dashboard</Link>
          <button onClick={logout} style={{ marginLeft: 20 }}>Logout</button>
        </>
      )}
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
