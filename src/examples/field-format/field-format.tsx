import React from "react";
import {Field, Form} from "react-final-form";

type FormValues = {
    name: string
    phone: number
}

const normalizePhone = (value: string, name: string) => {
    if (!value) return '';

    const onlyNums = value.replace(/[^\d]/g, "");

    if (onlyNums.length <= 3) {
        return onlyNums;
    }

    if (onlyNums.length <= 7) {
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
    }

    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
        6,
        10,
    )}`;
};


export const FieldFormat = () => {
    const onSubmit = (values: FormValues) => console.log(values)

    return (
        <>
            <Form onSubmit={onSubmit} initialValues={{}}>
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
                        <Field name="phone"
                               component="input"
                               placeholder="(999) 999-9999"
                               format={normalizePhone}
                        />

                        <button type='submit'>Submit</button>
                    </form>
                )}
            </Form>
        </>
    )
}