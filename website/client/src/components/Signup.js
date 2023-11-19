import React, { useState } from 'react';
import register from "../images/sign up page new.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate("/login");
        }
    }

    return (
        <section className="signup" style={{ background: 'rgb(212, 229, 230)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div className="container mt-5">
    <div className="signup-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="signup-form">
        <h2 className="form-title" style={{ textAlign: 'center' }}>Sign up</h2>
        <form method="POST" className="register-form" id="register-form">
          <div className="form-group">
            <label htmlFor="name">
             
            </label>
            <input
              type="text"
              name="name"
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding: '10px' }}
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
             
            </label>
            <input
              type="email"
              name="email"
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding: '10px' }}
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
             
            </label>
            <input
              type="number"
              name="phone"
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding: '10px' }}
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Your Phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              
            </label>
            <input
              type="password"
              name="password"
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding: '10px' }}
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Your Password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpassword">
             
            </label>
            <input
              type="password"
              name="cpassword"
              style={{ height: '45px', width: '400px', border: 'none', background: '#f9f9f9', borderRadius: '30px', padding: '10px' }}
              id="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Your Password"
            />
          </div>

          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              style={{ height: '45px', width: '400px', border: 'none', background: 'yellow', borderRadius: '30px', padding: '10px', color: '#313131' }}
              value="Register"
              onClick={PostData}
            />
          </div>
          <NavLink to="/login" className="sign-up-image-link" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          I am already registered
        </NavLink>
        </form>
      </div>

      <div className="signup-image" style={{ marginLeft: '20px' }}>
        <figure>
          <img src={register} alt="register" style={{ width: '30vw', height: 'auto' }} />
        </figure>
      </div>
    </div>
  </div>
</section>

    );
};

export default Signup;
