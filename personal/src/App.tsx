import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { ThemeProvider } from '@emotion/react'
import { theme } from './components/Theme'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Personal } from './components/Personal'
import { Footer } from './components/CustomComponents/Footer'

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
        <Footer/>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
