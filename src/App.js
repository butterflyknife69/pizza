import React from "react";
import './scss/app.scss'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Content />
    </div>
  );
}

export default App;
