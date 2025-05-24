import React from 'react';
import StatusBadge from './StatusBadge';

export default function IssueCard({ issue }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-lg font-bold">{issue.title}</h2>
      <p>{issue.description}</p>
      <StatusBadge status={issue.status} />
    </div>
  );
}