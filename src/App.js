import React from "react";
import './scss/app.scss'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import NotFound from "./components/NotFoundBlock/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
