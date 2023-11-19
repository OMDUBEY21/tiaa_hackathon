import React from 'react';
import pricingtable from '../images/pricingtable.jpg';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const Pricing = () => {

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_x0OkMyBfvKp0ac",
      amount: data.amount,
      currency: data.currency,
      name: "Premium Membership",
      description: "Premium Membership for chatbot",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  async function payPremium() {
    try {
      const res = await axios.post('http://localhost:5000/payment');
      //const generatedText = res.data.generatedText;
      console.log(res.data);
      initPayment(res.data);

    } catch (error) {

    }
  }

  return (
    <section id="pricing" className="pricing-section" style={{ background: 'rgb(212 229 230)', padding: '50px 0', textAlign: 'center', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5em', color: '#333', marginBottom: '30px' }}>Choose the Right Plan for You</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="pricing-card" style={{ width: '300px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
          <h3 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>Free Plan</h3>
          <p style={{ color: '#666', fontSize: '1.2em', marginBottom: '20px' }}>Perfect for getting started</p>
          <p style={{ color: '#333', fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px' }}>Free</p>
          <button style={{ background: '#CDFAD5', color: '#333', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1em' }}> <NavLink to="/chatbot" style={{ textDecoration: 'none', color: '#333'}}>
            Try the Free Version
          </NavLink></button>
        </div>

        <div className="pricing-card" style={{ width: '300px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
          <h3 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>Premium Plan</h3>
          <p style={{ color: '#666', fontSize: '1.2em', marginBottom: '20px' }}>Great for advance use</p>
          <p style={{ color: '#333', fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px' }}>₹500/month</p>
          <button style={{ background: '#CDFAD5', color: '#333', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1em' , minWidth: '182px'}} onClick={payPremium}>Pay</button>
        </div>

      </div>
    </section>



  );
}

export default Pricing;