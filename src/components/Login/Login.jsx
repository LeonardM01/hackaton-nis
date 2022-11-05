import React, { useState } from 'react';
import '../../index.css';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useSignInEmailPassword, useAuthenticationStatus } from '@nhost/react';
import { COLORS } from '../../assets/theme';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const { signInEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } = useSignInEmailPassword();
  const disableForm = isLoading || needsEmailVerification;


  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickBack = () => {
    navigation('/');
  };

  const onClickRegister = () => {
    navigation('/register');
  };

  const onClickLogin = async () => {
    // eslint-disable-next-line react/destructuring-assignment
    await signInEmailPassword(email, password);
    if (isSuccess) {
      navigation('/home');
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={onClickBack} className="grid justify-content-left" type="button"><ChevronLeftIcon className="h-12 pl-4 mt-8" /></button>
      <h1 className="text-4xl text-left font-bold mt-12 px-6">Welcome back! Glad to see you again!</h1>
      <div className="grid justify-items-center mt-16">
        <form className="grid justify-items-center">
          <input
            disabled={disableForm}
            type="text"
            className="outline-1 p-4 my-4 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Enter your email"
            value={email}
            onChange={onChangeEmail} />
          <input
            disabled={disableForm}
            type="password"
            className="outline-1 p-4 my-4 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Enter your password"
            value={password}
            onChange={onChangePassword} />
        </form>
      </div>
      <div className="grid">
        <p className="pr-16 text-right" style={{ color: '#6A707C' }}>Forgot Password?</p>
        <button onClick={onClickLogin} type="button" className="w-80 rounded-lg my-6 py-4 grid justify-self-center" style={{ backgroundColor: COLORS.black, color: 'white' }}>Login</button>
        <p className="bottom-0 justify-self-center fixed text-center">Don't have and account? <span style={{ color: COLORS.primary }} onClick={onClickRegister}>Register now</span></p>
      </div>
    </div>
  );
}

export default Login;
