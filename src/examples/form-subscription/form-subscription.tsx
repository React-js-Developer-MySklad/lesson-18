import React from "react";
import {Field, Form} from "react-final-form";
import {sleep} from "../../utils/time";

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


export const FormSubscription = () => {
    const onSubmit = async (values: FormValues) => {
        await sleep()
        console.log(values)
    }

    return (
        <>
            <Form onSubmit={onSubmit}
                  subscription={{submitting: true}}
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
                        <button type='submit' disabled={props.submitting}>Submit</button>
                    </form>
                )}
            </Form>
        </>
    )
}