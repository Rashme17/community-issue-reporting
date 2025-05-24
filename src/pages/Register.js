// src/pages/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
