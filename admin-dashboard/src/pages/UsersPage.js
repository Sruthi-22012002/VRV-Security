import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/API';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  
  const handleCreateUser = async (newUser) => {
    const response = await createUser(newUser);
    setUsers([...users, response.data]);
  };
  
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => handleCreateUser({ name: 'New User', email: 'newuser@example.com', role: 'User', status: 'Active' })}>Add User</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => { /* Edit user */ }}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersPage;

