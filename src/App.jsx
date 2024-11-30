import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Common.css";
import { allFiles } from "./components";

function App() {
  const { Header, Footer, SignIn, SignUp, Home, Restaurants, Product } =
    allFiles;
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

{
  /* <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div> */
}
