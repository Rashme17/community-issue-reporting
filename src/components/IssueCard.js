import React from "react";
import StatusBadge from "./StatusBadge";

export default function IssueCard({ issue }) {
  return (
    <div className="border rounded-lg p-4 shadow mb-6 bg-white max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        
        {/* ─── Image (Optional) ─── */}
        {issue.image && (
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full sm:w-48 h-auto max-h-48 object-cover rounded-md border"
          />
        )}

        {/* ─── Textual Details ─── */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{issue.title}</h2>
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
