import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../assets/theme';

function Register({ auth }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigate();
  const disableForm = isLoading || needsEmailVerification;

  const onClickBack = () => {
    navigation('/');
  };

  const onClickRegister = async () => {
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          navigation('/verification');
          const user = userCredential.user;

        })
        .catch((error) => {
          console.log(error.message);
        });

    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={onClickBack} className="grid justify-content-left" type="button"><ChevronLeftIcon className="h-10 pl-4 mt-8" /></button>
      <h1 className="text-4xl text-left font-bold mt-12 px-6">Hello! Register to get started</h1>
      <div className="grid justify-items-center mt-8">
        <form className="grid justify-items-center">
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            className="outline-1 p-4 my-2 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="First name"
          />
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            className="outline-1 p-4 my-2 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Last name"
            disabled={disableForm}
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            className="outline-1 p-4 my-2 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Email"
            disabled={disableForm}
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="outline-1 p-4 my-2 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Password"
            disabled={disableForm}
          />
          <input
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            className="outline-1 p-4 my-2 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Confirm password"
            disabled={disableForm}
          />
        </form>
      </div>
      <div className="grid">
        <button
          onClick={onClickRegister}
          type="button"
          className="w-80 rounded-lg my-6 py-4 grid justify-self-center"
          style={{ backgroundColor: COLORS.black, color: 'white' }}
        >
          Register
        </button>
        <p
          className="bottom-0 justify-self-center fixed text-center"
        >
          Already have an account?
          <span style={{ color: COLORS.primary }} onClick={() => { navigation('/login'); }}> Login now</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
