// src/pages/AdminDashboard.js
import { useState } from "react";
import IssueCard from "../components/IssueCard";

const AdminDashboard = () => {
  const [issues, setIssues] = useState(JSON.parse(localStorage.getItem("issues")) || []);

  const updateStatus = (index, status) => {
    const updated = [...issues];
    updated[index].status = status;
    localStorage.setItem("issues", JSON.stringify(updated));
    setIssues(updated);
  };

  return (
    <div>
      <h2>All Reported Issues</h2>
      {issues.map((issue, i) => (
        <div key={i}>
          <IssueCard issue={issue} />
          <select onChange={e => updateStatus(i, e.target.value)} value={issue.status}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
