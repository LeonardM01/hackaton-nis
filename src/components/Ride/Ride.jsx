import React from 'react';
import { TRUCK_ICON, USER_ICON } from '../../assets/theme';

function Ride() {
  return (
    <div className="h-full grid">
      <h1 className="justify-self-start font-bold text-2xl">
        My Rides
      </h1>
      <ul className="mt-6">
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6 h-20" style={{ backgroundColor: 'rgba(5, 205, 188, 0.2)' }}>
          <TRUCK_ICON />
          <h3 className="ml-6 font-bold">Placa 13, 51517 Kornić<br /><small className="font-normal">2 passengers</small></h3>
          <p className="fixed right-12 rounded-lg p-1 mb-16 w-8" style={{ backgroundColor: 'rgba(5, 205, 188, 1)', color: 'white' }}> +10</p>
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6 h-20">
          <USER_ICON />
          <h3 className="ml-6 font-bold">Placa 13, 51517 Kornić<br /><small className="font-normal">Driver: Leonard Martinis</small></h3>
          <p className="fixed right-12 rounded-lg p-1 mb-16 w-8 text-center" style={{ backgroundColor: 'rgba(5, 205, 188, 1)', color: 'white' }}> +5</p>
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6 h-20">
          <USER_ICON />
          <h3 className="ml-6 font-bold">Placa 13, 51517 Kornić<br /><small className="font-normal">Driver: Andrija Varga</small></h3>
          <p className="fixed right-12 rounded-lg p-1 mb-16 w-8 text-center" style={{ backgroundColor: 'rgba(5, 205, 188, 1)', color: 'white' }}> +5</p>
        </li>
        <li className="flex items-center shadow-lg rounded-lg p-2 mb-6 h-20" style={{ backgroundColor: 'rgba(5, 205, 188, 0.2)' }}>
          <TRUCK_ICON />
          <h3 className="ml-6 font-bold">Put Puhari 25, 51000 Matulji<br /><small className="font-normal">2 passengers</small></h3>
          <p className="fixed right-12 rounded-lg p-1 mb-16 w-8" style={{ backgroundColor: 'rgba(5, 205, 188, 1)', color: 'white' }}> +10</p>
        </li>
      </ul>
    </div>
  );
}

export default Ride;
