import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './Dashboard.css'

const Dashboard = () => {
  const { user, tasks, logout, deleteTask } = useContext(UserContext);
  const navigate = useNavigate();

  // ✅ Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent rendering before redirect

  return (
    <><div className="dashboard-container">
    <h2>Welcome To Task Manager</h2>
    <h3>Welcome, {user?.name}! 🎉</h3>
    <p>Email: {user?.email}</p>

    {/* ✅ Link to Add Task */}
    <Button className="btn btn-primary mb-3" onClick={() => navigate("/addtask")}>
      Add Task
    </Button>

    {/* ✅ Show Tasks in Table Format */}
    <h4>Your Tasks:</h4>
    {tasks.length > 0 ? (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th> {/* ✅ New Column for Edit & Delete */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.category}</td>
              <td>{task.priority}</td>
              <td>{task.deadline}</td>
              <td>{task.status}</td>
              <td>
                {/* ✅ Edit Button */}
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate(`/edittask/${task.id}`)}
                  className="me-2"
                >
                  Edit
                </Button>

                {/* ✅ Delete Button */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <p>No tasks available. Start adding tasks!</p>
    )}

    {/* ✅ Logout Button */}
    <Button className="btn btn-danger mt-3" onClick={logout}>
      Logout
    </Button>
  </div>
    </>
  );
};

export default Dashboard;
