import { v4 } from "uuid";
import { Form, Field } from "react-final-form";

import girl from "../_helpers/assets/bg.png";

import { validate } from "../_helpers/validate/validate";

import Input from "./Form/Input";
import Button from "./Button";

function FormTodo ({ onAdd }) {
    const handleAdd = (values, form) => {
        onAdd({id: v4(), description: values.description, checked: false});
        Object.keys(values).forEach(item => {
            form.change(item, undefined);
            form.resetFieldState(item);
        })
    };

    return (
        <Form
            onSubmit={handleAdd}
            render={(helpers) => {
                const { handleSubmit, form } = helpers;
                return (
                    <form
                        action="#"
                        onSubmit={(values) => handleSubmit(values, form)}
                        className="todo__item"
                    >
                        <img src={girl} className="todo__img" alt="girl"/>
                        <Field
                            name="description"
                            component={Input}
                            validate={validate}
                            type="text"
                        />
                        <Button text="Add"/>
                    </form>
                )
            }}
        />
    )
}

export default FormTodo;