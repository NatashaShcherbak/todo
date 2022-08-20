function Button ({ text, onClick, style }) {
    return (
        <button onClick={onClick} style={style} className="todo__btn">{text}</button>
    )
}

export default Button;