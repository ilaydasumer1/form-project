import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDetail() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Kullanıcıları çeken fonksiyon
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Projeleri çeken fonksiyon
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchUsers();
    fetchProjects();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Users</h2>
          <table className="table">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user._id}>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
        <div className="col-md-6">
          <h2>Projects</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.type}</td>
                  <td>{project.description}</td>
                  <td>{project.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDetail;
