function Input(props) {
    const { input, meta, showDelete, onRemove, ...rest} = props;
    return (
        <div className="todo__input-wrapper">
            <label className="todo__input-wrapper todo__input-wrapper_column">
                <input
                    onChange={input.onChange}
                    className={meta.error && meta.touched ? "todo__input error" : "todo__input"}
                    value={input.value}
                    placeholder="Your task ..."
                    {...rest}
                />
                <span className="todo__input-span">{meta.error && meta.touched ? meta.error : ""}</span>
            </label>
            { showDelete && (
                <button className="todo__btn-x" type="button" onClick={onRemove}>&#10007;</button>
            )}
        </div>
    )
}
export default Input;