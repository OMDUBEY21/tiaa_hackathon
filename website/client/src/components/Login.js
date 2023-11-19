import React, {useContext, useState} from 'react'
import login from "../images/login.jpg";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method:"POST",
      credentials:"include",
      headers: {
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({
          email, password
      })
    });

    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else {
      dispatch({type: "USER", payload: true})
      window.alert("Login Successfull");
      navigate("/");
    }
  }

    return (
      <section className="sign-in" style={{ background: 'rgb(212 229 230)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="signin-content">
        <div className="signup-form">
          <h2 className="form-title" style={{ textAlign: 'center'}}>Sign in</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="email">
               
              </label>
              <input
                type="email"
                name="email"
                style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding:'10px'}}
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="password">
                
              </label>
              <input
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding:'10px'}}
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
            </div>
    
            <div className="form-group form-button">
              <input
              style={{ height: '45px', width: '400px', border: 'none', background: '#FFFB73', borderRadius: '30px', padding:'10px', color: '#313131'}}
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                value="Log In"
                onClick={loginUser}
              />
            </div>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <NavLink to="/signup" className="signup-image-link">
              Create an Account
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    
    )
}


export default Login