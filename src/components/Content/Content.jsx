// import React from "react";
// import Category from "./Category/Category";
// import PizzaBlock from "./PizzaBlock/PizzaBlock";
// import Skeleton from "./PizzaBlock/Skeleton";
// import Sort from "./Sort/Sort";


// const Content = () => {
//   const [items, setItems] = React.useState([])
//   const [isLoading, setIdLoading] = React.useState(true)
//   const [categoryId, setCategoryId] = React.useState(0)
//   const [sortType, setSortType] = React.useState({
//     name: 'популярности', sortProperty: 'rating'
//   })

//   React.useEffect(() => {
//     setIdLoading(true);
//     fetch(`https://659c37a4d565feee2dacac9d.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''
//       }&sortBy=${sortType.sortProperty}&order=desc`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const receivedItems = Array.isArray(data) ? data : [];
//         setItems(receivedItems);
//         setIdLoading(false);
//       })
//     window.scrollTo(0, 0);
//   }, [categoryId, sortType])



//   return (
//     <div className="container">
//       <div className="content__top">
//         <Category value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
//         <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
//       </div>
//       <h2 className="content__title">Все пиццы</h2>
//       <div className="content__items">
//         {
//           isLoading
//             ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
//             : items.map(p => <PizzaBlock key={p.id} {...p} />)
//         }
//       </div>
//     </div>
//   )
// }

// export default Content;


import React from "react";
import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Sort from "./Sort/Sort";

const Content = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIdLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности', sortProperty: 'rating'
  });

  React.useEffect(() => {
    setIdLoading(true);
    fetch(`https://659c37a4d565feee2dacac9d.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        const receivedItems = Array.isArray(data) ? data : [];
        setItems(receivedItems);
        setIdLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIdLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const pizzas = items.filter(obj =>{
    return
  }).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletons : pizzas}
      </div>
    </div>
  );
};

export default Content;
