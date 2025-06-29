import React from 'react';

const UserList = ({loading, users, handleDelete}) => {
  
  if (loading) return <span>Loading Users...</span>
  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName}  - {user.school} - {new Date(user.dob).toLocaleDateString()}
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '8px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
