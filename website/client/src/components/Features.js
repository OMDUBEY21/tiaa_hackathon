import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features-section" style={{ background: 'rgb(212 229 230)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <div className="features-info" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="features-heading" style={{ fontSize: '2.5em', color: '#333', marginBottom: '20px' }}>
          Navigating Retirement, Together.
        </h2>
        <p className="features-paragraph" style={{ fontSize: '1.2em', color: '#666' }}>
         
Our innovative chatbot serves as an AI-powered digital assistant, dedicated to empowering users in crafting robust retirement plans. Leveraging advanced algorithms, it thoroughly assesses and understands the intricacies of each user's distinct financial situation and individual goals.
        </p>
      </div>

      <div className="features-list">
        <div className="feature">
          <h3>Free Version Features</h3>
          <ul style={{ color: '#666', listStyle: 'none', padding: 0 }}>
            <li>Basic retirement planning advice</li>
            <li>Investment recommendations</li>
            <li>Retirement income projections</li>
          </ul>
        </div>

        <div className="feature">
          <h3>100% Secured</h3>
          <p style={{ color: '#666' }}>We take proactive steps to make sure your information and transactions are secure.</p>
        </div>

        <div className="feature">
          <h3>Premium Version Features</h3>
          <ul style={{ color: '#666', listStyle: 'none', padding: 0 }}>
            <li>Customized investment portfolios</li>
            <li>Tax optimization strategies</li>
            <li>Access to financial advisors</li>
            <li>Addition of a Will After Death</li>
          </ul>
        </div>
      </div>
    </section>

  );
}

export default Features;
