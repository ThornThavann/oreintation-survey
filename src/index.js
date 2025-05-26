// main.jsx or index.js

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkillsWithQuestionsAndRatings from './pages/survey/survey.js';
import SurveyResultPage from './pages/Result/result.js';
import Home from './pages/Home/home.js';
import ShortTranning from './pages/ShortTranning/ShortTranning.js';
import Foundation from './pages/Foundation/Foundation.js';
import React from 'react';
import Contact from './pages/Contact/Contact.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/skillwithquestionandratings" element={<SkillsWithQuestionsAndRatings />} />
      <Route path="/student-results/:studentId" element={<SurveyResultPage />} />
      <Route path="/short-trannig" element={<ShortTranning />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />


    </Routes>
  </BrowserRouter>
);


