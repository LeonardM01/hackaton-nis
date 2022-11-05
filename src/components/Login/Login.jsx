import React from 'react';
import '../../index.css';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { redirect, useNavigate } from 'react-router-dom';
import { useAuthenticated } from '@nhost/react';
import { COLORS } from '../../assets/theme';

function Login(nhost) {
  let emailInput;
  let passwordInput;
  const navigation = useNavigate();

  const onClick = () => {
    navigation('/');
  };

  const onSubmit = async () => {
    // eslint-disable-next-line react/destructuring-assignment
    await nhost.auth.signIn({
      email: emailInput,
      password: passwordInput,
    });
    if (useAuthenticated()) {
      navigation('/home');
    }
  };

  return (
    <div className="">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={onClick} className="grid justify-content-left" type="button"><ChevronLeftIcon className="h-12 pl-4 mt-8" /></button>
      <h1 className="text-4xl text-left font-bold mt-12 px-6">Welcome back! Glad to see you again!</h1>
      <div className="grid justify-items-center mt-16">
        <input className="outline-1 p-4 my-4 rounded-xl text-2xl" style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }} placeholder="Enter your email" value={emailInput} />
        <input className="outline-1 p-4 my-4 rounded-xl text-2xl" style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }} placeholder="Enter your password" value={passwordInput} onSubmit={onSubmit()} />
      </div>
    </div>
  );
}

export default Login;
