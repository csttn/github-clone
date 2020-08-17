import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyles'

import Header from './components/Header'
import Footer from './components/Footer';

import Repo from './pages/Repo'
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:repo" element={<Repo />} />
      </Routes>

      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

