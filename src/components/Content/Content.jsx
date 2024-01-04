import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Sort from "./Sort/Sort";


const Content = (props) => {
    return (
        <div class="content">
            <div class="container">
                <div class="content__top">
                    <Category />
                    <Sort />
                </div>
                <h2 class="content__title">Все пиццы</h2>
                <div class="content__items">
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                </div>
            </div>
        </div>
    )
}

export default Content;