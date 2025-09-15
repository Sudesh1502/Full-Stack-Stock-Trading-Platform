import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';

import {LoaderProvider} from './LoaderContext.js'


const Home = () => {
  return (
    <>
    <LoaderProvider>
      <TopBar />
      <Dashboard />
      <Toaster/>
      </LoaderProvider>
    </>
  );
};

export default Home;
