import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Chatbot.css'; // Import the corresponding CSS file

const Chatbot = () => {

    const navigate =  useNavigate();
    const [userData, setUserData] = useState();

    const callChatbot = async () => {
        try {
            const res = await fetch('/chatbot', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }
        } catch (err) {
            console.log(err);
            navigate("/login");
        }
    }   

    useEffect(() => {
        callChatbot();
    }, [])



    const openWhatsApp = () => {
    // Replace '123456789' with the actual phone number, including the country code
    // e.g., for the United States, use '+1' followed by the number
    const phoneNumber = '+14155238886';

    // Replace 'Hello, this is a test message!' with your actual message
    const message = encodeURIComponent('Join graph-tales');

    // Create the WhatsApp URL
    const whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + message;

    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappURL, '_blank');
    };

    return (
        <div className="chatbot-container" style={{ background: '#d4e5e6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <form method="GET" style={{ textAlign: 'center', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>WELCOME</h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>To Chatbot</h3>
          <p className="chatbot-description" style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Discover the power of conversational AI with our chatbot! Engage in natural language conversations and get quick, automated responses to your queries. Whether you need assistance, information, or just want to chat, our chatbot is here for you.
          </p>
          <button onClick={openWhatsApp} className="whatsapp-button" style={{ padding: '10px 20px', fontSize: '1rem', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Open Chatbot on WhatsApp
          </button>
        </form>
      </div>
      
    );
};

export default Chatbot;
