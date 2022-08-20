import { useState } from 'react';
import Button from "./Button";

function Item({ id, description, checked, deleteItem, updateItem }) {
    const [edit, setEdit] = useState(null);
    const [task, setTask] = useState('');

    const removeTask = () => {
        deleteItem(id);
    };

    const handleChecked = () => {
        updateItem({ id, description, checked: !checked });
    }

    const editTask = () => {
        setEdit(id);
        setTask(description);
    }

    const cancelEdit = () => {
        setTask(description);
        setEdit(null);
    }

    const saveTask = (event) => {
        event.preventDefault();
        updateItem({ id, description: task, checked });
        setEdit(null);
    }

    return (
        (
            edit === id ?
                <form className="todo__item todo__item_margin" onSubmit={saveTask}>
                    <input
                        type="text"
                        name="description"
                        className="todo__input"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <Button
                        style={{borderRadius: 0, marginRight: "4px"}}
                        text="Save"
                    />
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={cancelEdit}
                    />
                </form> :
                    <div className="todo__item todo__wrapper">
                        <label className="todo__row">
                            <input type="checkbox" onClick={handleChecked} defaultChecked={checked} />
                            <p className="todo__text">{description}</p>
                        </label>
                        <Button onClick={editTask}
                                style={{borderRadius: "6px 0 0 6px", marginRight: "4px"}}
                                text="Edit"/>
                        <Button onClick={removeTask} text="Delete"/>
                    </div>
        )
    )
}

export default Item;