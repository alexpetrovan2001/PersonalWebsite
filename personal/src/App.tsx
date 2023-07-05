import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { ThemeProvider } from '@emotion/react'
import { theme } from './components/Theme'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Personal } from './components/Personal'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />}/>
            <Route path="/me" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
