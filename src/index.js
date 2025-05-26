// main.jsx or index.js

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkillsWithQuestionsAndRatings from './pages/survey/survey.js';
import SurveyResultPage from './pages/Result/result.js';
import Home from './pages/Home/home.js';
import SOB from './pages/Tvet/sob.js';
import FILM from './pages/Tvet/film.js';
import SOC from './pages/Tvet/soc.js';
import SOM from './pages/Tvet/som.js';
import SOH from './pages/Tvet/soh.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/skillwithquestionandratings" element={<SkillsWithQuestionsAndRatings />} />
      <Route path="/student-results/:studentId" element={<SurveyResultPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/sob" element={<SOB />} />
      <Route path="/film" element={<FILM />} />
      <Route path="/soc" element={<SOC />} />
      <Route path="/som" element={<SOM />} />
      <Route path="/soh" element={<SOH />} />


    </Routes>
  </BrowserRouter>
);


