// src/pages/ReportIssue.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ title: "", desc: "", category: "", image: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push({ ...form, username: user.username, status: "Pending", comments: [] });
    localStorage.setItem("issues", JSON.stringify(issues));
    navigate("/user-dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report an Issue</h2>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} required />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, desc: e.target.value })} required />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} required />
      <input type="text" placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportIssue;
