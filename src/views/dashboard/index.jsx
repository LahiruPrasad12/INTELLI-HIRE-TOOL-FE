import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'; // Import your custom styles

const VirtualInterviewUI = () => {

  const messages = [
    'Welcome to Your Next Interview Experience!',
    'Embark on an Ethical Interview Journey',
    'Discover Your Authentic Interview Self',
    'Unleash Confidence in Every Response',
    'Wishing You a Stellar Interview Ahead!',
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000); // Change the interval time as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container-fluid vh-100 d-flex flex-column zoom-ui-container">
      <div className="row flex-grow-1">
        <div className="col-9 p-0">
          <div className="embed-responsive embed-responsive-16by9">
            {/* <img
              title="Interview Video"
              className="embed-responsive-item"
              src="../../assets/svgs/" // Replace with the actual path to your SVG image
              style={{ width: '100%', height: '85vh' }}
              alt="Interview Video"
            /> */}
            <div style={{ position: 'relative', width: '100%' }}>
              <img
                src="https://i.postimg.cc/HWf6NYLf/customer5-1-1.gif"
                alt=""
                style={{ width: '100%', height: '85vh' }}
                className="login-card-img"
              />
              <div style={{ animationDuration: '10s' }} className="animated-text">{messages[messageIndex]}</div>
            </div>
          </div>
        </div>
        <div className="col-3 bg-secondary p-3 text-light">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="m-0">Interview Questions</h5>
            <button className="btn btn-sm btn-light">Next Question</button>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Tell us about yourself.</li>
            <li className="list-group-item">What are your strengths?</li>
            <li className="list-group-item">How do you handle challenges?</li>
            {/* Add more interview questions here */}
          </ul>
        </div>
      </div>
      <div className="row control-buttons">
        <div className="col text-center p-2 bg-secondary">
          <div className="mb-2">
            <p className="text-light">We are capturing your voice and video for the interview.</p>
          </div>
          <button className="btn btn-success mr-3">Start Interview</button>
          <button className="btn btn-danger mr-3">End Interview</button>
          <button className="btn btn-primary">Share Screen</button>
        </div>
      </div>
    </div>
  );
};

export default VirtualInterviewUI;
