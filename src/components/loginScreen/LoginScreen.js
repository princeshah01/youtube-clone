import React from 'react';
import './_LoginScreen.scss';
import YouTubeLogo from '../asset/YouTubeLogo.js';
const LoginScreen = () => {
  return (
    <div className='login'>
        <div className='login__container'>
            <div className='logo'>
            <YouTubeLogo />

            </div>
            <button>Login With Google</button>
            <p>This app was created by Prince using Youtube API</p>
        </div>
      
    </div>
  );
}

export default LoginScreen;
