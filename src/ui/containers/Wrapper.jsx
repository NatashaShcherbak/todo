import { Component } from 'react'

import Form from '../components/Form';
import Item from "../components/Item";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    addItem({ id, description }) {
        const { items } = this.state;
        this.setState({
            items: [...items, { id, description }]
        })
    }

    removeItem({ id }) {
        const { items } = this.state;
        this.setState({
            items: items.filter((item) => item.id !== id)
        })
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container todo">
                <h1 className="todo__title">TODO</h1>
                <Form onAdd={this.addItem.bind(this)} />
                {items.map((item) => <Item key={item.id} id={item.id} deleteItem={this.removeItem.bind(this)} description={item.description}/>)}
            </div>
        )
    }
}

export default Wrapper;