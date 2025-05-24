import React from 'react';

export default function StatusBadge({ status }) {
  const colorMap = {
    'Pending': 'bg-yellow-400',
    'In Progress': 'bg-blue-400',
    'Resolved': 'bg-green-500'
  };

  return (
    <span className={`px-2 py-1 text-white text-sm rounded ${colorMap[status] || 'bg-gray-300'}`}>
      {status}
    </span>
  );
}