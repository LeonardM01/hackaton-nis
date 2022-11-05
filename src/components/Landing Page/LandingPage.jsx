import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginPageIcon from '../../assets/login-page-icon.png';
import loginIcon from '../../assets/login-icon.png';
import { COLORS } from '../../assets/theme';

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = (page) => async (event) => {
    event.preventDefault();
    if (page === 'login') navigate('/login', { replace: false });
    else navigate('/register', { replace: false });
  };

  return (
    <div className="grid justify-items-center">
      <img src={loginPageIcon} className="max-h-screen" alt="logo" />
      <img src={loginIcon} className="max-h-40 w-auto" alt="logo" />
      <div className="grid justify-content-center pt-12">
        <button onClick={handleClick('login')} type="button" className="w-80 rounded-lg my-6 py-4" style={{ backgroundColor: COLORS.black, color: 'white' }}>Login</button>
        <button onClick={handleClick('register')} type="button" className="border-2 border-black w-80 rounded-lg py-4" style={{ backgroundColor: 'white', color: 'black' }}>Register</button>
      </div>
    </div>
  );
}

export default LandingPage;
