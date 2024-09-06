import React, { useRef, useState } from "react";
import axios from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { UserCircle, Lock, KeyRound } from "lucide-react";

const Authentication = () => {
  const userName = useRef();
  const passWord = useRef();
  const navigateTo = useNavigate();

  function submitLogin(e) {
    e.preventDefault();

    const loginCredentials = JSON.stringify({
      userName: userName.current.value,
      password: passWord.current.value,
    });

    const authenticateCredentials = async () => {
      const data = await axios.post("/login", loginCredentials);
      if (data.status === 200) {
        navigateTo("/dashboard");
      }
    };

    authenticateCredentials();
  }

  return (
    <form action="" className="flex flex-col w-full items-center h-full">
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-1">
          <UserCircle />
          <input ref={userName} type="text" placeholder="Username" />
        </div>
        <div className="flex gap-1">
          <Lock />
          <input ref={passWord} placeholder="Password" type="password" />
        </div>
        <button
          className="bg-sky-600/90 text-white rounded-md shadow-lg w-full py-2 gap-2 flex justify-center"
          title="Login"
          type="submit"
          onClick={submitLogin}
        >
          <KeyRound /> Login
        </button>
      </div>
    </form>
  );
};

export default Authentication;
