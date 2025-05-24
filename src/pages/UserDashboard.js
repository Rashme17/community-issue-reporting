// src/pages/UserDashboard.js
import { useAuth } from "../context/AuthContext";
import IssueCard from "../components/IssueCard";

const UserDashboard = () => {
  const { user } = useAuth();
  const issues = JSON.parse(localStorage.getItem("issues")) || [];
  const userIssues = issues.filter(issue => issue.username === user.username);

  return (
    <div>
      <h2>Your Issues</h2>
      {userIssues.map((issue, i) => <IssueCard key={i} issue={issue} />)}
    </div>
  );
};

export default UserDashboard;
