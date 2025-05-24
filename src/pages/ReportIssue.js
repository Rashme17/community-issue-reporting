import React from 'react';
import IssueForm from '../components/IssueForm';

export default function ReportIssue() {
  const handleSubmit = data => {
    console.log('Reported Issue:', data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Report an Issue</h1>
      <IssueForm onSubmit={handleSubmit} />
    </div>
  );
}