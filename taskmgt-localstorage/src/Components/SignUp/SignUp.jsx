import React, { useContext, useEffect, useRef, useState } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar1 from "../Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const SignUp = () => {
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();
  const firstInputRef = useRef(null); // Reference to first input field

  // ✅ State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    password: "",
    conPassword: "",
  });

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus(); // Automatically focus on first input
    }
  }, []);

  const [validated, setValidated] = useState(false);


  
  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // ✅ Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const form = event.currentTarget;

    // ✅ Check if any field is empty
  if (!formData.name || !formData.email || !formData.mobileno || !formData.password || !formData.conPassword) {
    alert("Please fill in all fields!"); // Show alert if fields are empty
    return;
  } 

    // Check form validation
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // ✅ Check if passwords match
      if (formData.password !== formData.conPassword) {
        alert("Passwords do not match!");
        return;
      }
     

      // ✅ Signup the user
      signup({
        name: formData.name,
        email: formData.email,
        mobileno: formData.mobileno,
        password: formData.password,
      });

      // ✅ Redirect to login page
      navigate("/login");
    }

    setValidated(true);
  };

  return (
    <>
    <Navbar1 />
      {/* <div className="signUp"> */}
        
        <div className="signUp">
          <h1>Create Your Own Account</h1>
          <div className="signUp-form" >
            {/* <h2 >Sign-Up Here..</h2> */}
            <div className="inputbox" >
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name.."
                  value={formData.name}
                  onChange={handleChange}
                  ref={firstInputRef} // Focus on first input
                  required
                />
               
                

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@mail.com.."
                  onChange={handleChange}
                  value={formData.email}
                  autoComplete="username"
                  required
                />
                

                <label htmlFor="mobileno">Mobile Number:</label>
                <input
                  type="tel"
                  name="mobileno"
                  placeholder="Mobile Number"
                  value={formData.mobileno}
                  onChange={handleChange}
                  maxLength="10" // Optional: Limit to 10 digits
                  required
                />
               

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="####"
                  onChange={handleChange}
                  value={formData.password}
                  autoComplete="new-password"
                  required
                />
                

                <label htmlFor="conPassword">Confirm Password:</label>
                <input
                  type="password"
                  name="conPassword"
                  placeholder="####"
                  onChange={handleChange}
                  value={formData.conPassword}
                  autoComplete="new-password"
                  required
                />
              

                <Button type="submit">Sign-Up</Button>
               
              </Form>
              <div className="alreadyacc-link">
                
              <p><span>Already have an Account?</span><a href="/login"> Login Here...</a></p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default SignUp;




