import React from 'react';
import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Harika"
        school="ABC High School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
