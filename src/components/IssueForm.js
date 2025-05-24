import React, { useState } from 'react';

export default function IssueForm({ onSubmit }) {
  const [formData, setFormData] = useState({ title: '', description: '', category: '', image: null });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border" />
      <select name="category" onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Category</option>
        <option value="pothole">Pothole</option>
        <option value="garbage">Garbage</option>
        <option value="light">Street Light</option>
      </select>
      <input type="file" name="image" onChange={handleChange} className="w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}