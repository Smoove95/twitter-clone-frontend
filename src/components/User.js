import React from 'react';

function User({ user }) {
  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default User;