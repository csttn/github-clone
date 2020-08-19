import React, { useState } from 'react';

import 'react-calendar-heatmap/dist/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { ThemeName, themes } from './styles/themes';
import GlobalStyle from './styles/GlobalStyles'

import Header from './components/Header'
import Footer from './components/Footer';

import Repo from './pages/Repo'
import Profile from './pages/Profile';


function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light')
  const currentTheme = themes[themeName]

  return (

    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName}/>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:repo" element={<Repo />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

