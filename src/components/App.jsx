import React from 'react';
import '../index.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Login, LandingPage, Home, Register, ProtectedRoute, Verification } from './index';

function App({ auth }) {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login auth={auth} />} />
          <Route path="/register" element={<Register auth={auth} />} />
        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
