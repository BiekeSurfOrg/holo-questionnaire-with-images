import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import QuestionList from './QuestionList';
import Home from './Home';
import Results from './Results';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-layout">
          <div>
            <Routes>
              <Route path="/questions" element={<QuestionList />} />
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Results />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;