import { useState } from "react";
import Footer from "./assets/components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Common.css";
import SignIn from "./assets/components/signin/SignIn";
import Home from "./assets/components/Home/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
