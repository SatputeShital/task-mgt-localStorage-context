






import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

// Custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const navigate = useNavigate();

  // ✅ Signup Function (Stores in localStorage)
  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup Successful! Please login.");
  };

  // ✅ Login Function (Validates & Navigates)
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      alert("Login Successful!");
      console.log("Navigating to Dashboard...");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password!");
      console.log("Login failed: Invalid credentials");
    }
  };


  const [tasks, setTasks] = useState([]);
   // ✅ Load tasks from localStorage on initial render
   useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // ✅ Function to add a task
  const addTask = (task) => {
    const updatedTasks = [...tasks, { id: Date.now(), ...task }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Save to localStorage
 
      // ✅ Schedule Reminder
      scheduleReminder(task);
  };

  // ✅ Function to schedule reminders
  const scheduleReminder = (task) => {
    if (!task.reminder) return;

    const reminderTime = new Date(task.reminder).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = reminderTime - currentTime;

    if (timeDifference > 0) {
      setTimeout(() => {
        alert(`⏰ Reminder: ${task.title} is due!`);
      }, timeDifference);
    }
  };

  // ✅ Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // ✅ Function to edit a task
  // const editTask = (taskId, updatedTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === taskId ? { ...task, ...updatedTask } : task
  //   );
  //   setTasks(updatedTasks);
  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  // };
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };


  
  // ✅ Logout Function (Clears Session)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // localStorage.removeItem("tasks"); // Optional: Remove tasks on logout
    navigate("/login");
  };


  return (
    <UserContext.Provider value={{ user, signup, login, logout,tasks, addTask , updateTask, deleteTask, }}>
      {children}
    </UserContext.Provider>
  );
};










