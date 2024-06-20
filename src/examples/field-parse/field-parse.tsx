import React from "react";
import {Field, Form} from "react-final-form";

type FormValues = {
    name: string
    age: number
}

const parseNumber = (value: string) => {
    const result = parseInt(value);
    if (!isNaN(result)) {
        return result;
    }
}


export const FieldParse = () => {
    const onSubmit = (values: FormValues) => console.log(values)

    return (
        <>
            <Form onSubmit={onSubmit}
                  validate={(values: FormValues) => {

                      if (values.name && values.name.includes('Bob')) {
                          return { name: {message: `Name is not allowed ${values.name}`} }
                      }

                      return undefined;
                  }} >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="name" >
                            {props => {
                                return (
                                    <>
                                        <input {...props.input}/>
                                        {props.meta.error && <span>{props.meta.error.message}</span>}
                                    </>
                                )
                            }}
                        </Field>
                        <Field name="age" component='input' parse={parseNumber} />
                        <button type='submit'>Submit</button>
                    </form>
                )}
            </Form>
        </>
    )
}