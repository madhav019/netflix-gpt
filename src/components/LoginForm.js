import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checked from "../static/icons/checked.svg";
import { emailIsValid, passwordIsValid } from "../utils/FormValidations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { getErrorMessage } from "../utils/ErrorMessages";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/user-slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState({
    name: null,
    email: null,
    password: null,
  });

  /*************************************************************************/

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  /*************************************************************************/

  const isFormValid = () => {
    const isValid = Object.keys(errorState).reduce(
      (acc, val) => !errorState[val] && acc,
      true
    );

    const notEmpty = !!(
      emailRef.current.value &&
      passwordRef.current.value &&
      (!isSignIn ? nameRef.current.value : true)
    );

    return isValid && notEmpty;
  };

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSubmitButton = () => {
    setError("");

    if (!isFormValid()) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(getErrorMessage(errorCode));
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: nameRef.current.value,
          });
        })
        .then(() => {
          dispatch(
            addUser({
              displayName: nameRef.current.value,
              ...userInfo,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(getErrorMessage(errorCode));
        });
    }
  };

  const validateEmail = () => {
    setErrorState((prev) => {
      return { ...prev, email: emailIsValid(emailRef.current.value) };
    });
  };

  const validatePassword = () => {
    setErrorState((prev) => {
      return { ...prev, password: passwordIsValid(passwordRef.current.value) };
    });
  };

  /*************************************************************************/

  return (
    <div className="absolute bg-black sm:w-[450px] p-10 mt-[5vh] sm:mx-auto flex flex-col gap-6 right-0 left-0 lg:bottom-0 rounded-md bg-opacity-70">
      <h1 className="text-white font-bold text-3xl">
        Sign {isSignIn ? "In" : "Up"}
      </h1>

      {error && (
        <div className="bg-yellow-600 text-white p-4 rounded-md ">{error}</div>
      )}

      <div className="flex flex-col gap-4">
        {!isSignIn && (
          <div className="w-full flex flex-col gap-1">
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="h-12 p-4 rounded-md bg-black bg-opacity-30 border border-slate-50 text-white"
            />
          </div>
        )}
        <div className="w-full flex flex-col gap-1">
          <input
            name="email"
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className={`h-12 p-4 rounded-md bg-black bg-opacity-30 border text-white ${
              errorState.email ? "border-red-700" : "border-slate-50"
            }`}
            onBlur={validateEmail}
            onFocus={() =>
              setErrorState((prev) => {
                return { ...prev, email: null };
              })
            }
          />
          {!!errorState.email && (
            <p className="text-red-700">{errorState.email}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <input
            name="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className={`h-12 p-4 rounded-md bg-black bg-opacity-30 border text-white ${
              errorState.password ? "border-red-700" : "border-slate-50"
            }`}
            onBlur={validatePassword}
            onFocus={() =>
              setErrorState((prev) => {
                return { ...prev, password: null };
              })
            }
          />
          {!!errorState.password && (
            <p className="text-red-700">{errorState.password}</p>
          )}
        </div>
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
