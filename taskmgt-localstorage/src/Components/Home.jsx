import React from "react";
import Navbar from "./Navbar";
import logo from "../task-logo.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signUp"); // Navigate to login page
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="main">
          <div className="intro">
            <img src={logo} alt="" />
            <h1>Task Managment</h1>
            <p>
              Stay organized, meet deadlines, and collaborate effortlessly with
              task management system. Assign tasks, track progress, and achieve
              more...
            </p>
            <div className="about-btn">
              <button>Know More..</button>
              <button onClick={handleSignUpClick}> Join Now...</button>
            </div>
          </div>
          <div className="intro-img"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
