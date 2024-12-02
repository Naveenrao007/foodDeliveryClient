import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MyProvider } from "./context/Context";
import "./Common.css";
import "leaflet/dist/leaflet.css";

import { allFiles } from "./components";

function App() {
  const { Profile, Footer, SignIn, SignUp, Home, Product } =
    allFiles;
  return (
    <MyProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <main>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </MyProvider>

  );
}

export default App;
