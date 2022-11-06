import React, { useState } from 'react';
import { COLORS } from '../../assets/theme';

function Base() {
  const [connections, setConnections] = useState({
    button1: 'Connect',
    button2: 'Pending',
    button3: 'Connect',
    button4: 'Connect',
    button5: 'Connect',
  });

  const pendingButton = () => (
    <button
      className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
      style={{ backgroundColor: COLORS.gray, color: '#849293' }}
    >
      Pending
    </button>
  );

  function connectButton(buttonNumber) {
    return (
      <button
        onClick={() => setConnections({ ...connections, [buttonNumber]: 'Pending' })}
        className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
        style={{ backgroundColor: COLORS.secondary, color: 'white' }}
      >
        Connect
      </button>
    );
  }

  return (
    <div>
      <ul>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Junior Grillo<br /><small className="font-normal">distance ~3.2 km</small></h3>
          { connections.button1 === 'Connect' ? (
            connectButton('button1')
          ) : (
            pendingButton()
          )}
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/27.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Darwin Casilla<br /><small className="font-normal">distance ~2 km</small></h3>
          { connections.button2 === 'Connect' ? (
            connectButton('button2')
          ) : (
            pendingButton()
          )}
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Marlon Vizueth<br /><small className="font-normal">distance ~0.5 km</small></h3>
          { connections.button3 === 'Connect' ? (
            connectButton('button3')
          ) : (
            pendingButton()
          )}
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/55.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Gavin Swanda<br /><small className="font-normal">distance ~1.5 km</small></h3>
          { connections.button4 === 'Connect' ? (
            connectButton('button4')
          ) : (
            pendingButton()
          )}
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/72.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Arturo Ciel<br /><small className="font-normal">distance ~1.1 km</small></h3>
          { connections.button5 === 'Connect' ? (
            connectButton('button5')
          ) : (
            pendingButton()
          )}
        </li>
      </ul>
    </div>
  );
}

export default Base;
