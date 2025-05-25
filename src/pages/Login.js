// src/pages/Login.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add a small delay to show loading state
    setTimeout(() => {
      if (!login(form.username, form.password)) {
        alert("Invalid credentials");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text"
              placeholder="Enter your username" 
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })} 
              required 
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Enter your password" 
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} 
              required 
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="#register">Contact your administrator</a></p>
        </div>
      </div>
      

    </div>
  );
};

export default Login;