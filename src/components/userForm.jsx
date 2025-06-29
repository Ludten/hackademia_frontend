import React, { useState } from 'react';
import { createUser } from '../api';

const UserForm = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [dob, setDob] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'school':
        setSchool(value);
        break;
      case 'dob':
        setDob(value);
        break;
      default:
        break;
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const res = await createUser(firstName, lastName, school, dob);
    if (res) {
      setFirstName('');
      setLastName('')
      setSchool('');
      setDob('');
      onSuccess();
    }
  }
  
  return(
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Add New User</h2>
      <div>
        <label>First Name:</label>
        <input required type="text" name="firstName" value={firstName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input required type="text" name="lastName" value={lastName} onChange={handleChange} /> 
      </div>
      <div>
        <label>School:</label>
        <input required type="text" name="school" value={school} onChange={handleChange} />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input required type="date" name="dob" value={dob} onChange={handleChange} />
      </div>
      <button style={{ width: "200px" }} type="submit">Add User</button>
    </form>
  )
};

export default UserForm;