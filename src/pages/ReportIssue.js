// src/pages/ReportIssue.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ title: "", desc: "", category: "", image: "" });
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push({ ...form, username: user.username, status: "Pending", comments: [] });
    localStorage.setItem("issues", JSON.stringify(issues));

    navigate("/user-dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Report an Issue</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.desc}
        onChange={(e) => setForm({ ...form, desc: e.target.value })}
        required
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportIssue;
