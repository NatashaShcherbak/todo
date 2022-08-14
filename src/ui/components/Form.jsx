import { Component } from 'react';
import {v4} from "uuid";

import girl from "../../bg.png";

import Button from "./Button";

class Form extends Component {
    handleAdd(event) {
        event.preventDefault();
        const { onAdd } = this.props;
        onAdd({id: v4(), description: event.target.description.value});
        event.target.description.value = '';
    }
    render() {
        return (
            <form className="todo__item" onSubmit={this.handleAdd.bind(this)}>
                <img src={girl} className="todo__img" alt="girl" />
                <input type="text" name="description" className="todo__input"/>
                <Button text="Add" />
            </form>
        )
    }
}

export default Form;