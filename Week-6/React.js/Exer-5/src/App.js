import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      <CohortDetails
        name="React Training Batch 1"
        startDate="2024-06-01"
        endDate="2024-06-30"
        status="ongoing"
      />
      <CohortDetails
        name="Angular Training Batch 2"
        startDate="2024-04-01"
        endDate="2024-04-30"
        status="completed"
      />
    </div>
  );
}

export default App;
