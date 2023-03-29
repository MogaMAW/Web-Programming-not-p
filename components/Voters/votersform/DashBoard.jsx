import React, { useState } from "react";
import './Dashboard.css'

const Dashboard = () => {
  const [showAddanAdmin, setShowAddanAdmin] = useState(false);
  const [showAddAVoter, setShowAddAVoter] = useState(false);
  const [showAddACandidate, setShowAddACandidate] = useState(false);

  const handleAddanAdminClick = () => {
    setShowAddanAdmin(true);
    setShowAddAVoter(false);
    setShowAddACandidate(false);
  };

  const handleAddAVoterClick = () => {
    setShowAddanAdmin(false);
    setShowAddAVoter(true);
    setShowAddACandidate(false);
  };

  const handleAddACandidateClick = () => {
    setShowAddanAdmin(false);
    setShowAddAVoter(false);
    setShowAddACandidate(true);
  };

  return (
    <div className="dashboard">
     
      <div className="sidebar">
        <button onClick={handleAddanAdminClick}>ADD AN ADMIN</button>
        <button onClick={handleAddAVoterClick}>ADD A VOTER</button>
        <button onClick={handleAddACandidateClick}>ADD A CANDIDATE</button>
      </div>

  <div className="cards-left">
  <div className="card small">
    <h2>Small Card 1</h2>
    <p>
      Small card content
      Small card content
      Small card content
      Small card content
    </p>
  </div>
  <div className="card small">
    <h2>Small Card 2</h2>
    <p>
      Small card content
      Small card content
      Small card content
      Small card content
    </p>
  </div>
  
  <div className="card big-horizontal">
    <h2>Big Horizontal Card</h2>
    <p>
      Big card content
      Big card content
      Big card content
      Big card content
    </p>
  </div> 
  <div className="card big-horizontal">
    <h2>Big Horizontal Card</h2>
    <p>
      Big card content
      Big card content
      Big card content
      Big card content
    </p>
  </div> 
</div>     
  </div>
  );
};

export default Dashboard;
