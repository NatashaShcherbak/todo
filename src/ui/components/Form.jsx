import { v4 } from "uuid";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import { validate } from "../_helpers/validate/validate";

import Input from "./Form/Input";
import Button from "./Button";

function FormTodo ({ onAdd }) {
    const handleAdd = (values, form) => {
        const { todoList } = values;
        todoList.forEach(item => {
            onAdd({id: v4(), description: item, checked: false});
        })
        Object.keys(values).forEach(item => {
            form.change(item, undefined);
            form.resetFieldState(item);
        })
    };

    return (
        <Form
            onSubmit={handleAdd}
            mutators={{ ...arrayMutators }}
            initialValues={{ todoList: [''] }}
            render={(helpers) => {
                const { handleSubmit, form } = helpers;
                return (
                    <form
                        action="#"
                        onSubmit={(values) => handleSubmit(values, form)}
                        className="todo__item todo__item_wrap"
                    >
                        <FieldArray name="todoList">
                            {({fields}) => (
                                <>
                                    {fields.map((name, index) => <Field
                                        key={name}
                                        name={name}
                                        type="text"
                                        component={Input}
                                        validate={validate}
                                        showDelete={fields.length > 1}
                                        onRemove={() => fields.remove(index)}
                                    />)}
                                    <Button text="Add" className="todo__btn todo__btn_left" />
                                    <Button text="Add more" className="todo__btn" type="button" onClick={() => fields.push("")} />
                                </>
                            )}
                        </FieldArray>
                    </form>
                )
            }}
        />
    )
}

export default FormTodo;