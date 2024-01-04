import Category from "./Category/Category";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Sort from "./Sort/Sort";


const Content = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Category />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <PizzaBlock title={'Мексиканська'} price={200}/>
                    <PizzaBlock title={'Чілі'} price={400}/>
                    <PizzaBlock title={'Гавайська'} price={350}/>
                    <PizzaBlock title={'Мясна'} price={500}/>
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