// src/pages/Login.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(form.username, form.password)) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
