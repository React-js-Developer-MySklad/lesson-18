import {Field, Form} from "react-final-form";

type FormValues = {
    firstName: string
    lastName: string
    surname: string
}

export const FormSimple = () => {

    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    return (
        <>
            <Form<FormValues> onSubmit={onSubmit}>
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name='firstName' component='input'/>

                        <Field name='lastName' render={
                            ({input}) => <input {...input}/>
                        }/>

                        <Field name='surname'>
                            {
                                ({input}) => <input {...input}/>
                            }
                        </Field>

                        <button type='submit'>Submit</button>
                    </form>
                )}
            </Form>
        </>
    )
}