import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Comman/Footer";
import AppRouter from "./Router/AppRouter";
import Navbar from "./components/Comman/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ChatWidget from "./components/Comman/ChatBox";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AppRouter />
<ChatWidget/>
      <Footer />

      {/* <div className="flex justify-center items-center h-screen bg-gray-100">
      <ChatBox/>
    </div> */}
    </>
  );
}

export default App;
