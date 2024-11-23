import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/users">Users</a></li>
            <li><a href="/roles">Roles</a></li>
            <li><a href="/permissions">Permissions</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/roles" element={<div>Roles Page (Coming Soon)</div>} />
          <Route path="/permissions" element={<div>Permissions Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

