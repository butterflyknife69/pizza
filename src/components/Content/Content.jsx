// import React from "react";
// import Category from "./Category/Category";
// import PizzaBlock from "./PizzaBlock/PizzaBlock";
// import Skeleton from "./PizzaBlock/Skeleton";
// import Sort from "./Sort/Sort";


// const Content = () => {
//     const [items, setItems] = React.useState([])
//     const [isLoading, setIdLoading] = React.useState(true)
//     const [categoryId, setCategoryId] = React.useState(0)
//     const [sortType, setSortType] = React.useState(0)


//     React.useEffect(() => {
//         fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items')
//             .then(res => res.json())
//             .then(json => {
//                 setItems(json)
//                 setIdLoading(false)
//             })
//         window.scrollTo(0, 0)
//     }, [])



//     return (
//         <div className="container">
//             <div className="content__top">
//                 <Category value={categoryId} onClickCategory={(i)=>setCategoryId(i)}/>
//                 <Sort />
//             </div>
//             <h2 className="content__title">Все пиццы</h2>
//             <div className="content__items">
//                 {
//                     isLoading
//                         ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
//                         : items.map(p => <PizzaBlock key={p.id} {...p} />)
//                 }
//             </div>
//         </div>
//     )
// }

// export default Content;


import React from "react";
import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Sort from "./Sort/Sort";

const Content = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
//   const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    fetch('https://659c37a4d565feee2dacac9d.mockapi.io/items')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
      {isLoading
  ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
  : Array.isArray(items) && items.length > 0  
    ? items.map(p => <PizzaBlock key={p.id} {...p} />)
    : <p>Дані про піци відсутні або виникла помилка</p>
}

      </div>
    </div>
  );
};

export default Content;
