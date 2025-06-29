import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../api";
import UserForm from "../components/userForm";
import UserList from "../components/userList";

function StudentsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    
  const fetchUsers = async () => {
    setLoading(true);
    const allusers = await getUsers();
    setUsers(allusers);
    setLoading(false);
  }
  
  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserForm onSuccess={fetchUsers}/>
      
      <UserList loading={loading} users={users} handleDelete={handleDelete}/>
    </div>
  )
}

export default StudentsPage;