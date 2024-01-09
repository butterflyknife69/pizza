import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Sort from "./Sort/Sort";


const Content = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    {/* <Category /> */}
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                {
                 props.items
                 .map(p=> <PizzaBlock key={p.id} {...p}/>
                 )
                 }
                </div>
            </div>
        </div>
    )
}

export default Content;