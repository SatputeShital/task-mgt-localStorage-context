import React, { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import './AddTask.css'

const AddTask = () => {
  const { addTask } = useUserContext();
  const navigate = useNavigate();

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

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation for required fields
    if (!task.title || !task.description || !task.deadline) {
      alert("Please fill in all required fields!");
      return;
    }

    addTask(task);
    alert("Task Added Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="add-task-container">
      <h2>Add New Task</h2>
     <div className="addTask-form" >
     <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          autoFocus
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />

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
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          required
        />

        <label>Reminder:</label>
        <input
          type="datetime-local"
          name="reminder"
          value={task.reminder}
          onChange={handleChange}
        />

        <label>Status:</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label>Assignee:</label>
        <input
          type="text"
          name="assignee"
          placeholder="Enter assignee name"
          value={task.assignee}
          onChange={handleChange}
        />

        <button type="submit">Add Task</button>
      </form>
     </div>
    </div>
  );
};

export default AddTask;
