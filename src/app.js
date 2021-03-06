import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Box } from '@mui/system';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExcerciseDetail';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1448px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
