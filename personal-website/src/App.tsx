import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutMePage from './pages/aboutMePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutMe" element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
