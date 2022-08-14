import { Component } from 'react';

class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button onClick={onClick} className="todo__btn">{ text }</button>
        )
    }
}

export default Button;