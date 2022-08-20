function Button ({ text, onClick, style, type }) {
    return (
        <button
            type={type}
            onClick={onClick}
            style={style}
            className="todo__btn">
            {text}
        </button>
    )
}

export default Button;