import React from "react";
import {Field, Form} from "react-final-form";

type FormValues = {
    name: string
    age: number
}


export const FormValidation = () => {

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
                            <Field name="age" component='input' />
                            <button type='submit'>Submit</button>
                        </form>
                    )}
            </Form>
        </>
    )
}