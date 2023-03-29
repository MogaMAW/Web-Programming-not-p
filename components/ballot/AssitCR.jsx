import React, { useState } from 'react';
import './Ballotform.css'

const candidates = [
  {
    id: 1,
    name: 'MUTUA BRIAN MUNGOKA',
    photoUrl: 'https://pbs.twimg.com/profile_images/1594305306900701185/E0XBa5Oy_400x400.jpg',
  },
  {
    id: 2,
    name: 'WILSON NYUMBE MICAH',
    photoUrl: 'https://i0.wp.com/mbu.ug/wp-content/uploads/2019/12/rema-naija.jpg?fit=576%2C576&ssl=1',
  },
  {
    id: 3,
    name: 'NYINJO LONZIMA OLIVIER',
    photoUrl:'https://i0.wp.com/mbu.ug/wp-content/uploads/2019/12/rema-naija.jpg?fit=576%2C576&ssl=1',
  },
];

function AssitCR() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  function handleCandidateSelection(candidateId) {
    setSelectedCandidate(candidateId);
  }

  function handleVote() {
    // send vote to server and update candidate vote count
    setSelectedCandidate(null);
  }

  return (
    <div  className='Ballot-Form'>
        <form action=""> 

        <h1 id="header">BALLOT PAPER</h1>
      <p>Select a candidate to vote for as an Assistant Class Representative:</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {candidates.map(candidate => (
          <div key={candidate.id} style={{ display: 'flex', alignItems: 'center' }}>
            
            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
              
              <img src={candidate.photoUrl} alt={candidate.name} width="100" height="100" /> 
              <h2>{candidate.name}</h2>
              <button disabled={selectedCandidate === candidate.id} onClick={() => handleCandidateSelection(candidate.id)}>
              {selectedCandidate === candidate.id ? 'VOTED' : 'Vote'}
            </button>
{/* 
            </div> */}
          </div>
        ))}
      </div>
        </form>

     
    </div>
  );
}

export default AssitCR;


