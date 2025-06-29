import { getToken } from "./utlis";

const BASEURL = 'http://localhost:3000/api';

const getUsers = async () => {
  try {
    const response = await fetch(`${BASEURL}/students`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

const createUser = async (firstName, lastName, school, dob) => {
  try {
    const response = await fetch(`${BASEURL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        firstName, 
        lastName, 
        school, 
        dob
      }),
    });
    
    return await response.json();
    
  } catch (error) {
    console.error('Error creating User:', error);
    throw error;
  }
}

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${BASEURL}/students/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
    });
    
    return await response.json();
    
  } catch (error) {
    console.error('Error deleting User:', error);
    throw error;
  }
}

export {
  getUsers,
  createUser,
  deleteUser,
  BASEURL,
}
