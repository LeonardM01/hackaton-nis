import React from 'react';
import '../index.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Login, About, LandingPage, Home, Register, ProtectedRoute } from './index';

function App({ nhost }) {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/login" element={<Login nhost={nhost} />} />
          <Route path="/register" element={<Register nhost={nhost} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
