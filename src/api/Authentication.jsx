import React, { useRef, useState } from "react";
import axios from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { UserCircle, Lock } from "lucide-react";
import DefaultButton from "../components/common/Button";

const Authentication = () => {
  const userName = useRef();
  const passWord = useRef();
  const navigateTo = useNavigate();

  function submitLogin(e) {
    e.preventDefault();

    isLoading(true);

    const loginCredentials = JSON.stringify({
      userName: userName.current.value,
      password: passWord.current.value,
    });

    const authenticateCredentials = async () => {
      const data = await axios.post("/login", loginCredentials);
      if (data.status === 200) {
        setTimeout(() => {
          navigateTo("/dashboard");
        }, 2000);
      }
    };

    authenticateCredentials();
  }

  return (
    <form
      action="post"
      className="flex flex-col w-full items-center h-full"
      onSubmit={submitLogin}
    >
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-1">
          <UserCircle />
          <input ref={userName} type="text" placeholder="Username" />
        </div>
        <div className="flex gap-1">
          <Lock />
          <input ref={passWord} placeholder="Password" type="password" />
        </div>
        <DefaultButton title="Login" />
      </div>
    </form>
  );
};

export default Authentication;
