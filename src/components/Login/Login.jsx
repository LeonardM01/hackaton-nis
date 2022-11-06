import React, { useState } from 'react';
import '../../index.css';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { COLORS } from '../../assets/theme';

function Login({ auth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();



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
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential);
        navigation('/home');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={onClickBack} className="grid justify-content-left" type="button"><ChevronLeftIcon className="h-10 pl-4 mt-8" /></button>
      <h1 className="text-4xl text-left font-bold mt-12 px-6">Welcome back! Glad to see you again!</h1>
      <div className="grid justify-items-center mt-16">
        <form className="grid justify-items-center">
          <input
            type="text"
            className="outline-1 p-4 my-4 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Enter your email"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <input
            type="password"
            className="outline-1 p-4 my-4 rounded-xl text-2xl"
            style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
            placeholder="Enter your password"
            value={password}
            onChange={onChangePassword}
            required
          />
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
