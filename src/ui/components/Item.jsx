import { Component } from 'react';
import Button from "./Button";

class Item extends Component {
    removeTask() {
        const { deleteItem, id } = this.props;
        deleteItem({id});
    }
    render() {
        const { description } = this.props;
        return (
            <div className="todo__item todo__wrapper">
                <label className="todo__row">
                    <input type="checkbox" />
                    <p className="todo__text">{description}</p>
                </label>
                <Button onClick={this.removeTask.bind(this)} text="Delete" />
            </div>
        )
    }
}

export default Item;