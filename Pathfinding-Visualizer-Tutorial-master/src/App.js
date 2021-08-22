import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import ProjectInfo from './PathfindingVisualizer/info';

function App() {
  return (
    <div className="App">
      <ProjectInfo></ProjectInfo>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
