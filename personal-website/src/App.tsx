import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Navigation from './Navigation';
import AboutMeContent from './content/aboutMeContent';

function App() {
  return (
    <MantineProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="aboutMe" element={<AboutMeContent />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
