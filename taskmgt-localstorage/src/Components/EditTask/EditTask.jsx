import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import './EditTask.css'

const EditTask = () => {
  const { tasks, updateTask } = useContext(UserContext);
  const { id } = useParams(); // Get task ID from URL
  const navigate = useNavigate();

  // ✅ Find the task by ID
  const existingTask = tasks.find((task) => task.id === parseInt(id));

  // ✅ State to store task data
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "Personal",
    priority: "Medium",
    deadline: "",
    reminder: "",
    status: "Pending",
    assignee: "",
  });

  // ✅ Load task data when component mounts
  useEffect(() => {
    if (existingTask) {
      setTask(existingTask);
    } else {
      alert("Task not found!");
      navigate("/dashboard"); // Redirect if task not found
    }
  }, [existingTask, navigate]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task);
    alert("Task Updated Successfully!");
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="add-task-container">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} required autoFocus />

        <label>Description:</label>
        <textarea name="description" value={task.description} onChange={handleChange} required />

        <label>Category:</label>
        <select name="category" value={task.category} onChange={handleChange}>
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
          <option value="Study">Study</option>
          <option value="Health">Health</option>
        </select>

        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Deadline:</label>
        <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />

        <label>Reminder:</label>
        <input type="datetime-local" name="reminder" value={task.reminder} onChange={handleChange} />

        <label>Status:</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label>Assignee:</label>
        <input type="text" name="assignee" placeholder="Enter assignee name" value={task.assignee} onChange={handleChange} />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;


















