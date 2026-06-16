import React from 'react';
import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="John Doe" 
        School="Springfield High School" 
        Total={450} 
        goal={500} 
      />
    </div>
  );
}

export default App;