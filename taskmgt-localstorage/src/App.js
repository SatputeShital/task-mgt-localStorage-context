import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { UserProvider } from "./Components/Context/UserContext";

import AddTask from "./Components/AddTask/AddTask";
import EditTask from "./Components/EditTask/EditTask";
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
  <>
  
  {/* <Home/> */}
  <BrowserRouter>
      <UserProvider> {/* ✅ Wrap inside BrowserRouter */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addtask"  element={<AddTask/>}/>
          <Route exact path="/edittask/:id"  element={<EditTask/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </>
    
  );
}

export default App;
