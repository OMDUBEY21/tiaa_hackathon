import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
import { UserContext } from '../App';


const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatbot">
                Chatbot
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
        
        </>
      )
    }else {
      return (
        <>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatbot">
                Chatbot
              </NavLink>
            </li>
      
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <NavLink className="nav-link" to="/signup">
                Registration
              </NavLink>
            </li>
        
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
            <img src={logo} alt="logo" style={{ width: '100px', height: 'auto', marginLeft: '20px' }} />
        </NavLink>
        <button
          style={{ marginRight: '20px' }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
