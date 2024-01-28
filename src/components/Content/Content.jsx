import React from "react";
import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Sort from "./Sort/Sort";
import Pagination from "../../Pagination/Pagination";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";


const Content = () => {

  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId)

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIdLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности', sortProperty: 'rating'
  });

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIdLoading(true);
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(`https://659c37a4d565feee2dacac9d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `,)
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
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className="container">
      <div className="content__top">
        <Category value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletons : pizzas}
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </div>
  );
};

export default Content;
