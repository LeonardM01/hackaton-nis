import React from 'react';
import { AT_ICON, COLORS, PHONE_ICON } from '../../assets/theme';

function Users() {
  return (
    <div className="h-full grid">
      <h1 className="justify-self-start font-bold text-2xl">
        My Ride Buddies
      </h1>
      <ul className="mt-6">
        <li id="user1" className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/28.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Mark Mccahill<br />
            <small className="font-normal justify-items-center items-center my-1">
              <p className="flex"><PHONE_ICON />091 123 6547</p>
              <p className="flex"><AT_ICON />test@gmail.com</p>
            </small>
          </h3>
          <button
            onClick={() => document.getElementById('user1').classList.add('hidden')}
            className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
            style={{ backgroundColor: COLORS.gray, color: '#849293' }}
          >
            Remove
          </button>
        </li>
        <li id="user2" className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/50.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Galen Hehr<br />
            <small className="font-normal justify-items-center items-center my-1">
              <p className="flex"><PHONE_ICON />091 123 6547</p>
              <p className="flex"><AT_ICON />test@gmail.com</p>
            </small>
          </h3>
          <button
            onClick={() => document.getElementById('user2').classList.add('hidden')}
            className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
            style={{ backgroundColor: COLORS.gray, color: '#849293' }}
          >
            Remove
          </button>
        </li>
        <li id="user3" className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Shelby Gilewski<br />
            <small className="font-normal justify-items-center items-center my-1">
              <p className="flex"><PHONE_ICON />091 123 6547</p>
              <p className="flex"><AT_ICON />test@gmail.com</p>
            </small>
          </h3>
          <button
            onClick={() => document.getElementById('user3').classList.add('hidden')}
            className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
            style={{ backgroundColor: COLORS.gray, color: '#849293' }}
          >
            Remove
          </button>
        </li>
        <li id="user4" className="flex items-center shadow-lg rounded-lg p-2 mb-6">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/49.jpg"
            className="h-16 rounded-xl"
          />
          <h3 className="ml-6 font-bold">Ivan Maduzia<br />
            <small className="font-normal justify-items-center items-center my-1">
              <p className="flex"><PHONE_ICON />091 123 6547</p>
              <p className="flex"><AT_ICON />test@gmail.com</p>
            </small>
          </h3>
          <button
            onClick={() => document.getElementById('user4').classList.add('hidden')}
            className="px-2 py-1 right-12 mb-12 fixed rounded-xl"
            style={{ backgroundColor: COLORS.gray, color: '#849293' }}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Users;
