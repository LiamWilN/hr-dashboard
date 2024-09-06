import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/main/Navigation";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Home;
