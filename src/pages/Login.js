import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <div className="px-2">
        <h2 className="mt-20 uppercase font-extrabold text-xl">
          Login to your account
        </h2>
        <input
          type="text"
          placeholder="Email Address"
          required
          className="w-11/12 mt-4 p-4 outline outline-gray-200 focus:outline-brand"
        ></input>
        <input
          type="password"
          placeholder="Password"
          required
          className="w-11/12 mt-4 p-4 outline outline-gray-200 focus:outline-brand"
        ></input>
        <br></br>
        <div className="text-left">
          <input
            type="checkbox"
            className="mt-4 mx-4 accent-brand"
            value="remember"
          ></input>
          <label>Remember Me</label>
        </div>
        <button
          type="button"
          className="bg-brand w-11/12 p-4 mt-4"
          onClick={() => {
            navigate("/sales");
          }}
        >
          <span className=" text-white text-xl font-bold">LOGIN</span>
        </button>
        <p className="mt-5">
          <a href="https://google.com" className="font-bold underline">
            Forgot your password?
          </a>
        </p>
        <div className="flex mt-7 px-2 text-gray-400 text-md">
          <div className="w-1/3">
            <hr></hr>
          </div>
          <div className="w-1/3 -mt-3">OR</div>
          <div className="w-1/3">
            <hr></hr>
          </div>
        </div>
        <button type="button" className="bg-black w-11/12 p-4 mt-5">
          <span className=" text-white text-xl font-bold">
            CREATE AN ACCOUNT
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
