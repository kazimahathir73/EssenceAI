import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage';
import Summary from './components/summary';
import Upload_file from './components/upload_file';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/upload_file" element={<Upload_file />} />
      </Routes>
    </Router>
  );
}

export default App;
