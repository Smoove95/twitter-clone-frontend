import React, { useState } from 'react';

function Register() {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('About to make API request...');

    fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress, password })
    })
    .then((response) => {
        console.log('Received API response, status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        console.log('API request was successful, JSON:', json);
        // ... handle successful registration ...
    })
    .catch((error) => {
        console.log('API request failed, error:', error);
        // ... handle error ...
    });
};

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={emailAddress} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;