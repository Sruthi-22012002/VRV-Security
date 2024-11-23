import axios from 'axios';

const API_URL = 'https://fakeapi.com/'; // Placeholder URL

export const getUsers = async () => {
  return { data: [
    { id: 'user_1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 'user_2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  ]};
};

export const createUser = async (userData) => {
  return { data: { ...userData, id: 'user_3' } };
};

export const updateUser = async (userId, updatedData) => {
  return { data: { ...updatedData, id: userId } };
};

export const deleteUser = async (userId) => {
  return { data: { id: userId } };
};

export const getRoles = async () => {
  return { data: [
    { id: 'admin', name: 'Admin', permissions: { read: true, write: true, delete: true } },
    { id: 'moderator', name: 'Moderator', permissions: { read: true, write: false, delete: false } }
  ]};
};

export const createRole = async (roleData) => {
  return { data: { ...roleData, id: 'custom_role' } };
};

export const updateRole = async (roleId, updatedData) => {
  return { data: { ...updatedData, id: roleId } };
};

export const deleteRole = async (roleId) => {
  return { data: { id: roleId } };
};

