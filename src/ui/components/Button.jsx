function Button ({ text, onClick, type, className }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    )
}

export default Button;