import React from 'react';
import { COLORS } from '../../assets/theme';
import logoIcon from '../../assets/login-icon.png';

function Home() {
  return (
    <div style={{ backgroundColor: COLORS.secondary }} className="grid grid-flow-row h-screen">
      <div className="grid grid-cols-3 justify-items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzekZyyLNm25qRHjcSRRnSL7q0ZYo3vmDpfEaLBY4&s"
          className="h-24 mt-6 ml-4 justify-self-start rounded-full"
          alt="profile picture"
        />
        <h1 className="mt-12 text-3xl font-bold">Hi, Filip!</h1>
        <p className="mt-12 justify-items-end grid grid-cols-2 font-bold text-3xl">200 <img src={logoIcon} className="h-12 ml-4" /></p>
      </div>
      <div className="rounded-t-2xl h-screen w-screen fixed mt-36" style={{ backgroundColor: 'white' }}>
        
      </div>
    </div>
  );
}

export default Home;
