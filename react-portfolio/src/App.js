import React from 'react';
import './i18n/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import ContactPage from './components/pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
