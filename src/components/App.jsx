import React from 'react';
import '../index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login, About } from './index';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
