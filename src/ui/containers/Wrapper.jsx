import { useState, useEffect } from 'react';

import ErrorBoundary from "./Error Boundary";

import girl from "../_helpers/assets/bg.png";

import Item from "../components/Item";
import FormTodo from '../components/Form';

function Wrapper() {
    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    },[items])

    const addItem = ({ id, description, checked }) => {
        [{ id, description, checked }].forEach(item => {
            items.push(item);
        })
        setItems([...items]);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const updateItem = ({ id, checked, description }) => {
        const updateItems = items.map(item => {
            if(item.id === id) {
                item.checked = checked;
                item.description = description;
            }
            return item;
        })
        setItems(updateItems);
    }

    return (
        <ErrorBoundary>
            <div className="container todo">
                <h1 className="todo__title">TODO</h1>
                <img src={girl} className="todo__img" alt="girl"/>
                <FormTodo onAdd={addItem}/>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        checked={item.checked}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />
                ))}
            </div>
        </ErrorBoundary>
    )
}

export default Wrapper;