import React from "react";
import Header from "../components/Header";
import { LoginBackgroundImg } from "../constants";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="relative bg-black h-[100vh] w-[100vw] overflow-x-hidden">
      <Header />

      <img
        className="absolute h-[100vh] w-[100vw] object-cover top-0 left-0 opacity-0 lg:opacity-50 pointer-events-none"
        src={LoginBackgroundImg}
        alt="background img"
      />

      <LoginForm />
    </div>
  );
};

export default Login;
