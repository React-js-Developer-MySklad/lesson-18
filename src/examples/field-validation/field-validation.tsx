import React from "react";
import {Field, Form} from "react-final-form";

type FormValues = {
    name: string
    age: number
}


export const FieldValidation = () => {
    const onSubmit = (values: FormValues) => console.log(values)

    return (
        <>
            <Form onSubmit={onSubmit}>
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="name" validate={(value: string, allValues: FormValues, meta) => {
                            if (value && value.includes('Bob')) {
                                return {message: `Name is not allowed ${value}`}
                            }

                            return undefined;
                        }} >
                            {props => {
                                return (
                                    <>
                                        <input {...props.input}/>
                                        {props.meta.error && <span>{props.meta.error.message}</span>}
                                    </>
                                )
                            }}
                        </Field>
                        <Field name="age" component='input' />
                        <button type='submit'>Submit</button>
                    </form>
                )}
            </Form>
        </>
    )
}