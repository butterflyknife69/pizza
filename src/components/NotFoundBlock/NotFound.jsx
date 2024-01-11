
import s from './NotFound.module.scss'




const NotFound = (props) => {
    return (
        <div className={s.root}>
            <h1 >
                <span>=( </span>
                <br />
                Нічого не знайденно
            </h1>
            <p className={s.description}>Шкодда сторінка відсутня</p>
        </div>
    )
}

export default NotFound