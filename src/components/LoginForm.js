import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checked from "../static/icons/checked.svg";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSubmitButton = () => {};

  return (
    <div className="absolute bg-black sm:w-[450px] p-14 mt-[5vh] sm:mx-auto flex flex-col gap-10 right-0 left-0 lg:bottom-0 rounded-t-md bg-opacity-70">
      <h1 className="text-white font-bold text-3xl">
        Sign {isSignIn ? "In" : "Up"}
      </h1>

      <div className="flex flex-col gap-4">
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="h-12 p-4 rounded-md bg-black bg-opacity-30 border border-slate-50 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="h-12 p-4 rounded-md bg-black bg-opacity-30 border border-slate-50 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-12 p-4 rounded-md bg-black bg-opacity-30 border border-slate-50 text-white"
        />

        <button
          className="text-white bg-red-600 h-10 rounded-md hover:bg-opacity-70 active:opacity-80"
          onClick={handleSubmitButton}
        >
          Sign {isSignIn ? "In" : "Up"}
        </button>

        {isSignIn && (
          <>
            <div className="text-slate-400 w-full text-center">OR</div>

            <button className="text-white bg-gray-500 h-10 rounded-md bg-opacity-50 hover:bg-opacity-30 active:opacity-60">
              Use a sign-in code
            </button>

            <Link to="">
              <div className="text-white w-full text-center hover:underline hover:text-zinc-400">
                Forgot Password?
              </div>
            </Link>

            <div className="flex text-white gap-2 items-center">
              <div className="flex relative items-center justify-center rounded-sm overflow-hidden">
                <input
                  type="checkbox"
                  className="peer appearance-none bg-black border w-4 h-4 z-10 checked:bg-transparent cursor-pointer"
                />
                <img
                  src={Checked}
                  alt="checked"
                  className="absolute bg-white border border-white w-4 h-4 opacity-0 peer-checked:opacity-100 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <label>Remember me</label>
            </div>
          </>
        )}

        <div className={`text-white font-thin ${!isSignIn && "mt-10"}`}>
          {isSignIn ? "New to Netfix? " : "Already have an account? "}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={toggleForm}
          >
            Sign {isSignIn ? "Up now" : "In"}
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
