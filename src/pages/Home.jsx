import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/main/Navigation";

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/12 h-full">
        <Navigation />
      </div>
      <div className="w-10/12 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
