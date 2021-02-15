import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
      <Router>
        <div className="body">
          <Routes/>
        </div>
      </Router>
  );
}

export default App;
