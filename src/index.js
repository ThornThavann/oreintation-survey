// main.jsx or index.js

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkillsWithQuestionsAndRatings from './pages/survey/survey.jsx';
import SurveyResultPage from './pages/Result/result.jsx';
import Home from './pages/Home/home.jsx';
import ShortTranning from './pages/ShortTranning/ShortTranning.jsx';
import Foundation from './pages/Foundation/Foundation.jsx';
import React from 'react';
import Contact from './pages/Contact/Contact.jsx';
import SOB from './pages/Tvet/sob.jsx';
import FILM from './pages/Tvet/film.jsx';
import SOC from './pages/Tvet/soc.jsx';
import SOM from './pages/Tvet/som.jsx';
import SOH from './pages/Tvet/soh.jsx';
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
      <Route path="/business" element={<SOB />} />
      <Route path="/film" element={<FILM />} />
      <Route path="/mechanic" element={<SOC />} />
      <Route path="/construction" element={<SOM />} />
      <Route path="/soh" element={<SOH />} />


    </Routes>
  </BrowserRouter>
);


