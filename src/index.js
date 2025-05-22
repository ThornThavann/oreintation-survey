// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.js';
import Survey from './pages/survey/survey.js';
import Information from './pages/Information/information.js';
import Result from './pages/Result/result.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Survey />} />
      <Route path="/home" element={<Information />} />
      {/* <Route path="/Result" element={<Result />} /> */}
      <Route path="/result/:studentId" element={<Result />} />

    </Routes>
  </BrowserRouter>
);
