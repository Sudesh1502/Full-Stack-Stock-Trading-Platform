import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <Toaster/>
    </>
  );
};

export default Home;
