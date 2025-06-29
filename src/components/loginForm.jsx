import { useState } from "react";
import { login } from "../auth";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLogin = await login(email, password);
    if (userLogin) {
      alert('Login successful!');
      window.location.href = '/students';
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" style={{ width: '200px' }}>Login</button>
    </form>
  );
}

export default LoginForm;
