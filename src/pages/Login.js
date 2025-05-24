import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Send login request and store JWT
    console.log('Login attempt:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}