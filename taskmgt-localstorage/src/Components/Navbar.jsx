import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar1 = () => {
  return (
    <Navbar className="navbar" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Task management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav-link" className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;



// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Navbar1 = () => {
//   return (
//     <div>
//       <Navbar bg="dark"  data-bs-theme="dark">
//         <Container>
//             Task
//          {/* <img src="../task-logo.png" alt="" style={{width:"100px", height:"80px",marginRight:"50px"}}/> */}
//           <Nav className="me-auto">
//             <Nav.Link href="/" style={{marginRight:"60px",fontSize:"20px"}}>Home</Nav.Link>
//             <Nav.Link href="/login" style={{marginRight:"60px" ,fontSize:"20px"}}>Login</Nav.Link>
//             <Nav.Link href="/signUp" style={{marginRight:"60px" ,fontSize:"20px"}}>Sign-Up</Nav.Link>
//             <Nav.Link href="#about" style={{marginRight:"60px" ,fontSize:"20px"}}>About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Navbar1
