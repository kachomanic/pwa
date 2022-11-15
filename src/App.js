import React from 'react';
import logo from './assets/imgs/kubota-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex w-screen sm:h-8 md:h-20 lg:h-24 xl:h-36 bg-brand">
        <img src={logo} className="m-auto w-2/4 md:w-2/6 lg:w-1/5 mx-auto" alt="logo" />
      </div>
      <h2 className='mt-16 uppercase font-extrabold text-xl'>
        Login to your account
      </h2>
      <input type="text" placeholder="Email Address" required className="w-11/12 mt-4 p-4 outline outline-gray-200"></input>
      <input type="password" placeholder="Password" required className="w-11/12 mt-4 p-4 outline outline-gray-200"></input>
      <br></br>
      <div className='text-left'>
        <input type="checkbox" className='mt-4 mx-2 accent-brand' value="remember"></input>
        <label>Remember Me</label>
      </div>
      <button type="button" className='bg-brand w-11/12 p-4 mt-4'>
        <span className=' text-white text-xl font-bold'>LOGIN</span>
      </button>
      <p className='mt-4'>
        <a href="https://google.com" className='font-bold underline'>Forgot your password?</a>
      </p>
      <div className='flex mt-6 px-2 text-gray-400 text-md'>
        <div className='w-1/3'><hr></hr></div>
        <div className='w-1/3 -mt-3'>OR</div>
        <div className='w-1/3'><hr></hr></div>
      </div>
      <button type="button" className='bg-black w-11/12 p-4 mt-4'>
        <span className=' text-white text-xl font-bold'>CREATE AN ACCOUNT</span>
      </button>
    </div>
  );
}

export default App;
