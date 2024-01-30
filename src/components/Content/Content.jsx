import React from "react";
import axios from "axios";
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
  const { categoryId, sort } = useSelector(state => state.filter)
  const sortType = sort.sortProperty
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    // axios.get(`https://659c37a4d565feee2dacac9d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then(res => {
    //     setItems(res.data)
    //     setIsLoading(false)
    //   })
    //   .catch(error => {
    //     console.error('Помилка запиту:', error);
    //   });

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
        <Sort />
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
