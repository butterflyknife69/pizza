import React from "react";
import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Sort from "./Sort/Sort";


const Content = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIdLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState(0)


  // React.useEffect(() => {
  //   setIdLoading(true)
  //   fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items?category=' + categoryId)
  //     .then(res => res.json())
  //     .then(json => {
  //       setItems(json)
  //       setIdLoading(false)
  //     })
  //   window.scrollTo(0, 0)
  // }, [categoryId])
  React.useEffect(() => {
    setIdLoading(true);
    fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items?category=' + categoryId)
      .then(res => res.json())
      .then(data => {
        const receivedItems = Array.isArray(data) ? data : [];
        setItems(receivedItems);
        setIdLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

console.log('isLoading',isLoading);

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map(p => <PizzaBlock key={p.id} {...p} />)
        }
      </div>
    </div>
  )
}

export default Content;


