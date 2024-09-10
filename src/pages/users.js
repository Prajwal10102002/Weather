import React, {useState} from 'react'

const Users = () => {
  
    const [users, setUsers] = useState([
        { id: 1, username: 'johnDoe', password: '123456', role: 'Admin' },
        { id: 2, username: 'janeDoe', password: 'abcdef', role: 'User' },
        // Add more users as needed
      ]);
    
      const [showPasswords, setShowPasswords] = useState({});
    
      const togglePasswordVisibility = (id) => {
        setShowPasswords((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
    
      const handleUpdate = (id) => {
        // Logic to update user
        alert(`Update user with ID: ${id}`);
      };
    
      const handleDelete = (id) => {
        // Logic to delete user
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      };
    
      return (
        <>
        <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                <span className="fs-4">Weather App</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link">Users List</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">Sign Out</a></li>
            </ul>
        </header>
    </div>
        <div className="container mt-5">
          <h1>Users</h1>
          <button className="btn btn-primary mb-3">Add User</button>
          
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>
                    {showPasswords[user.id] ? user.password : '••••••••'}
                    <button
                      className="btn btn-sm btn-link"
                      onClick={() => togglePasswordVisibility(user.id)}
                    >
                      {showPasswords[user.id] ? 'Hide' : 'Show'}
                    </button>
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleUpdate(user.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
  )
}

export default Users