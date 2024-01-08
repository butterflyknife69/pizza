import React from "react";
import './scss/app.scss'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import pizzas from './assets/pizzas.json'




function App() {

  fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items')
  .then((res)=>{
    return res.json()
    })
    .then(json =>{
    console.log(json);
  })




  return (
    <div className="wrapper">
      <Header />
      <Content pizzas={pizzas}/>
    </div>
  );
}

export default App;
