import React from 'react';
import './i18n/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import CalendlyBadge from './components/common/Calendly/CalendlyBadge';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import ContactPage from './components/pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <CalendlyBadge />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
