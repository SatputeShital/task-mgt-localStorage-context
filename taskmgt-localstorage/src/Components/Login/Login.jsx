

import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./Login.css";
import Navbar1 from "../Navbar";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const { login } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent form from refreshing

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      login(credentials.email, credentials.password); // ✅ Call login function
    }

    setValidated(true);
  };

  return (<>
  <Navbar1/>
   <div className="login">
      
    
        <div className="login-form">
          <h2>Login Here..</h2>
          <div className="inputbox">
            <form noValidate validated={validated} onSubmit={handleSubmit}>
              <label><b>Email :</b></label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email.."
                onChange={handleChange}
                autoComplete="username"
              />
              <br />
              <label><b>Password :</b></label>
              <input
                required
                type="password"
                name="password"
                placeholder="* * * * *"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <br />
              <Button type="submit">Login</Button>
            </form>
            <div className="createacc-link">
              <span>Don't Have an Account?</span>
              <a href="/signUp"> Create Here...</a>
            </div>
          </div>
        </div>
     
    </div>
  </>
   
  );
};

export default Login;
