import React, { useEffect, useState } from 'react'
import robot from "../images/robot.png";

const Home = () => {


  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHomePage();
  }, []);

  const backgroundImageUrl = '/Users/kailash/Downloads/T7 - Copy/client/src/images/Retirement.png'

  return (
    <div>
      <section id="home" className="home-section" style={{ margin: '0 auto'}}>



        <div className="home-info" style={{ margin: '0 auto' }}>
          <div className="welcome-section" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: 'bolder', fontSize: '55px' }}>WELCOME</h1>
            <h1>{userName}</h1>
            <h2 style={{ fontFamily: 'Montserrat' , fontWeight: '500'}}>{show ? 'Happy to see you Here' : 'Join Us'}</h2>
            <p>Get Help Planning Your Retirement.</p>
          </div>


          <div className="discount-box" style={{ width: '400px', margin: '0 auto' }}>
            <div className="highlight-box">
              <p className="discount-text"><a href="http://localhost:8501/" className='discount-text'>Click Here for Live Demo</a></p>
            </div>
          </div>

          <p style={{ textAlign: 'center' }} className="explore-text">Explore endless options to start your Retirement planning.</p>
        </div>

      </section>

      <section id="features" className="features-section" style={{ margin: '0 auto', background: '#F2FFE9', padding: '50px 0' }}>
        <div className="features-info">
          <div className="feature-section" style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#333', fontFamily: 'Montserrat', fontSize: '2em', marginBottom: '20px' }}>Our Features</h1>
            <p style={{ color: '#666',fontFamily: 'Montserrat', fontSize: '1.2em' }}>Discover the powerful features that make RetireWise+ the best choice for your retirement planning.</p>
          </div>

          <div className='feature-card-container'>
            <div className='feature-card'>
              <h2 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>Intuitive Interface</h2>
              <p style={{ color: '#666' }}>Effortlessly navigate through our user-friendly interface for a seamless experience.</p>
            </div>

            <div className='feature-card'>
              <h2 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>Personalized Recommendations</h2>
              <p style={{ color: '#666' }}>Receive tailored suggestions based on your unique financial situation and retirement goals.</p>
            </div>

            <div className='feature-card'>
              <h2 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>Comprehensive Tools</h2>
              <p style={{ color: '#666' }}>Access a suite of tools to analyze and plan your retirement with confidence.</p>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2em', marginTop: '30px' }}>Explore these features and more to secure a worry-free retirement.</p>
        </div>
      </section>

      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2023 All rights reserved.</p>
      </footer>

    </div>

  );
}

export default Home;