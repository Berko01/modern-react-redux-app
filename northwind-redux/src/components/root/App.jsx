import React from 'react';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Navi />
      <div className="container mt-4">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
