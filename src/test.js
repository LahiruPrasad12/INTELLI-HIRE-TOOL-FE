import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './App.css'; // Create your own custom styles if needed

const ZoomVideoCallUI = () => {
  return (
    <div className="container-fluid bg-dark vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-9 p-0">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Zoom Video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-3 bg-secondary p-3 text-light">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="m-0">Meeting Participants</h5>
            <button className="btn btn-sm btn-light">Invite</button>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Participant 1</li>
            <li className="list-group-item">Participant 2</li>
            <li className="list-group-item">Participant 3</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center p-2 bg-secondary">
          <button className="btn btn-success mr-3">Start Video</button>
          <button className="btn btn-danger mr-3">End Call</button>
          <button className="btn btn-primary">Share Screen</button>
        </div>
      </div>
    </div>
  );
};

export default ZoomVideoCallUI;
