import React from "react";
import StatusBadge from "./StatusBadge";

export default function IssueCard({ issue }) {
  return (
    <div className="issue-card border rounded-xl p-6 shadow-lg mb-6 bg-white max-w-4xl mx-auto transition hover:shadow-xl">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-start">

        {/* ─── Image (Optional) ─── */}
        {issue.image && (
          <img
            src={issue.image}
            alt={issue.title}
            className="w-32 h-32 object-cover rounded-md border"
          />
        )}

        {/* ─── Textual Details ─── */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{issue.title}</h2>
          <p className="text-gray-700 mb-2">{issue.desc ?? issue.description}</p>

          {issue.category && (
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Category:</span> {issue.category}
            </p>
          )}

          <StatusBadge status={issue.status} />
        </div>
      </div>
    </div>
  );
}
