import { BASEURL } from "./api";

const login = async (email, password) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const res = await response.json();
    localStorage.setItem('token', res.token);
    return true;    
  } catch (error) {
    console.error('Error logging in:', error);
    throw false;
  }
}

export {
  login,
}