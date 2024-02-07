import React from "react";
import qs from 'qs'
import axios from "axios";
import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Sort, { sortList } from "./Sort/Sort";
import Pagination from "../../Pagination/Pagination";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurentPage, setFilters } from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)

  const isMounted = React.useRef(false)
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)
  const sortType = sort ? sort.sortProperty : ''; // Add null check here
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const onChangePage = number => { dispatch(setCurentPage(number)) }

  const fetchPizzas = () => {
    setIsLoading(true);
    const sortBy = sortType ? sortType.replace('-', '') : '';
    const order = sortType && sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios.get(`https://659c37a4d565feee2dacac9d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Помилка запиту:', error);
      });
  }

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find(obj => obj.sortType === params.sortType);
      dispatch(
        setFilters({
          ...params,
          sort: sort || {},
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!isSearch.current) {
      fetchPizzas()
    }
    isSearch.current = false
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: sortType,
        categoryId,
        currentPage
      })
      navigate(`?${queryString}`)
    }
    isMounted.current=true
  }, [categoryId, sortType, searchValue, currentPage])

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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Content;
