import {v4} from "uuid";

import girl from "../../bg.png";

import Button from "./Button";

function Form({ onAdd }) {
    const handleAdd = (event) => {
        event.preventDefault();
        if (event.target.description.value !== '') {
            onAdd({id: v4(), description: event.target.description.value, checked: false});
            event.target.description.value = '';
        }
    };

    return (
        <form className="todo__item" onSubmit={handleAdd}>
            <img src={girl} className="todo__img" alt="girl"/>
            <input type="text"
                   name="description"
                   className="todo__input"
                   placeholder="Your task ..."
            />
            <Button text="Add"/>
        </form>
    )
}

export default Form;