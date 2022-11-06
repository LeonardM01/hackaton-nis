import React, { useState } from 'react';
import { Box, Popper } from '@mui/material';
import { COLORS, HOME_BUTTON, RIDE_BUTTON, USER_BUTTON, SETTINGS_BUTTON, PLUS_BUTTON } from '../../assets/theme';
import token from '../../assets/token.png';
import navbarBox from '../../assets/navbar.png';
import { Ride, Base, Users } from '../index';

function Home() {
  const [filter, setFilter] = useState('Home');
  const [popper, setPopper] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(anchor ? null : e.currentTarget);
    if (popper) {
      setPopper(false);
    } else {
      setPopper(true);
    }
  };

  function popperDiv() {
    return (
      <Popper open={popper} className="h-screen w-screen" placement="top" style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)' }}>
        <Box className="h-screen w-screen fixed top-0" style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)' }}>
          <div className="h-[50%] w-[50%] fixed right-[27%] top-[25%]" style={{ backgroundColor: 'white' }} />
        </Box>
      </Popper>
    );
  }

  return (
    <div id="sve" style={{ backgroundColor: COLORS.secondary }} className="grid grid-flow-row h-screen w-full">
      {popperDiv()}
      <div id="gore" className="grid grid-cols-2 justify-items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzekZyyLNm25qRHjcSRRnSL7q0ZYo3vmDpfEaLBY4&s"
          className="h-14 mt-10 ml-6 justify-self-start rounded-full"
          alt="profile picture"
        />
        <h1 className="mt-12 text-4xl font-bold fixed left-24">Hi, Filip!</h1>
        <div className="mt-12 text-right font-bold text-3xl ml-20 w-fit grid-cols-2 grid">
          <p className="w-full">200</p>
          <img src={token} className="h-8 mt-1 ml-2" alt="token" />
        </div>
      </div>
      <div className="rounded-t-2xl h-screen w-screen fixed mt-36" style={{ backgroundColor: 'white' }}>
        <div className="m-8">
          { filter === 'Home' && <Base />}
          { filter === 'Ride' && <Ride />}
          { filter === 'User' && <Users />}
        </div>
        <div
          className="fixed bottom-0 grid grid-cols-4 border-0 h-20 w-full justify-items-center"
        >
          <img src={navbarBox} className="fixed bottom-0 left-0 z-0" />
          <button
            className="z-10"
            onClick={() => setFilter('Home')}
          ><HOME_BUTTON color={filter === 'Home' ? (COLORS.secondary) : ('#849293')} />
          </button>
          <button
            className="z-10"
            onClick={() => setFilter('Ride')}
          ><RIDE_BUTTON color={filter === 'Ride' ? (COLORS.secondary) : ('#849293')} />
          </button>
          <button
            className="z-10"
            onClick={() => setFilter('User')}
          ><USER_BUTTON color={filter === 'User' ? (COLORS.secondary) : ('#849293')} />
          </button>
          <button
            disabled
            className="z-10"
            onClick={() => setFilter('Settings')}
          ><SETTINGS_BUTTON color={filter === 'Settings' ? (COLORS.secondary) : ('#849293')} />
          </button>
        </div>
        <div className="fixed bottom-10 grid left-[37%]">
          <button onClick={handleClick}><PLUS_BUTTON color={COLORS.secondary} /></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
