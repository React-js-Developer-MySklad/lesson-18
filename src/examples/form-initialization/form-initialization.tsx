import {Field, Form} from "react-final-form";
import {useState} from "react";

type FormValues = {
    name: string
    age: number
}

export const FormInitialization = () => {

    const [values, setValues] = useState<FormValues>()

    const onSubmit = (values: FormValues) => {
        setTimeout(() => {
            setValues(values);
        }, 2000)
    }

    return (
        <>
            <button onClick={() => setValues({name: 'Bob', age: 60})}>Set Initial Data</button>

            {values && <Form onSubmit={onSubmit} initialValues={values} keepDirtyOnReinitialize >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="name" component='input'/>
                        <Field name="age" component='input' />
                        <button type='submit'>Submit</button>
                    </form>
                )}
            </Form>
            }
        </>
    )
}