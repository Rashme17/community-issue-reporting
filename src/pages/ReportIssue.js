// src/pages/ReportIssue.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ 
    title: "", 
    desc: "", 
    category: "", 
    image: "" 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // Base64 string
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add a small delay to show loading state
    setTimeout(() => {
      const issues = JSON.parse(localStorage.getItem("issues")) || [];
      issues.push({ 
        ...form, 
        username: user.username, 
        status: "Pending", 
        comments: [],
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("issues", JSON.stringify(issues));
      navigate("/user-dashboard");
      setIsLoading(false);
    }, 800);
  };

  const removeImage = () => {
    setForm({ ...form, image: "" });
    setImagePreview(null);
  };

  return (
    <div className="report-container">
      <div className="report-wrapper">
        <div className="report-header">
          <h2>Report an Issue</h2>
          <p>Help us improve by reporting problems you've encountered</p>
        </div>

        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label htmlFor="title">Issue Title</label>
            <input
              id="title"
              type="text"
              placeholder="Brief description of the issue"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
              disabled={isLoading}
              className="category-select"
            >
              <option value="">Select a category</option>
              <option value="pothole">Pothole</option>
                  <option value="garbage">Garbage Collection</option>
                  <option value="light">Street Light</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Please provide detailed information about the issue"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              required
              disabled={isLoading}
              rows={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Attach Screenshot (Optional)</label>
            <div className="file-upload-wrapper">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isLoading}
                className="file-input"
              />
              <label htmlFor="image" className="file-upload-label">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Choose Image
              </label>
            </div>
            
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
                <button 
                  type="button" 
                  onClick={removeImage}
                  className="remove-image"
                  disabled={isLoading}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`report-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Submitting Report...
              </>
            ) : (
              <>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
                Submit Report
              </>
            )}
          </button>
        </form>

        <div className="report-footer">
          <p>Need immediate help? <a href="/contact">Contact support</a></p>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;