import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./components/context/Context";
import "./Common.css";
import "leaflet/dist/leaflet.css";

import { allFiles } from "./components";

function App() {
  const { Header, Footer, SignIn, SignUp, Home, Restaurants, Product } =
    allFiles;
  return (
    <ContextProvider>

      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <main>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
