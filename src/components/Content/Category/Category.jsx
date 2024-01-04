import React from "react"



const Category = () => {

    const [activeIndex, setActiveIndex] = React.useState(0)
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }


    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {categories.map((c, i) =>
                    <li onClick={() => onClickCategory(i)}
                        className={activeIndex === i ? 'active' : ''} >{c} </li>)}
            </ul>
        </div>
    )
}
export default Category