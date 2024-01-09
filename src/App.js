import React from "react";
import './scss/app.scss'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Content items={items} />
    </div>
  );
}

export default App;
