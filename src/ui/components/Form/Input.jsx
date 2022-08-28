function Input(props) {
    const { input, meta, ...rest} = props;
    return (
        <label className="todo__input-wrapper">
            <input
                onChange={input.onChange}
                className={meta.error && meta.touched ? "todo__input error" : "todo__input"}
                value={input.value}
                placeholder="Your task ..."
                {...rest}
            />
            <span className="todo__input-span">{meta.error && meta.touched ? meta.error : ""}</span>
        </label>
    )
}
export default Input;