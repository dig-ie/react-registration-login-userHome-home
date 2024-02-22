import { Button } from '../Button/index'
import { Input } from '../Input/index'
import { Form } from './styles'
import { useController, useForm } from "react-hook-form"

export const LoginForm = ({ OnSubmit, Control}) => {

    const { control, handleSubmit, formState: {erros, isValid} } = useForm();
    
    return(
        <Form onSubmit={ OnSubmit }>
            <Input name='name' control = { Control }/>
            <br/>
            <Input name='email' control = { Control }/>
            <Button Type='submit'>aa</Button>
        </Form>
    )
}