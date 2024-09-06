import { useDispatch } from 'react-redux'
import React from 'react';
import {Form, Label, TextWrapper} from './InputForm.styled'


const InputsForm = ({ buttonText, formType }) => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const { email, password, name } = form.elements;

        if (formType = 'login') {
            dispatch(login({ email: email.value, password: password.value}));
        } else if (formType === 'register') {
            dispatch(register({ name: name.value, email: email.value, password: password.value }));
        }

        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            {formType === 'register' && (
                <Label htmlFor="name">
                    Username:
                    <input type="text" name="name" />
                </Label>
            )}
                <Label htmlFor="email">
                    Email:
                    <input type="email" name="email" />
                </Label>
                <Label>
                    Password:
                    <input type="password" name="password" />
                </Label>
                <button type="submit">{buttonText}</button>
                {formType === 'login' ? (
                    <TextWrapper>Don't have an account? <FormsLink to="/register">SignUp</FormsLink></TextWrapper>
                ) : (
                    <TextWrapper>Do you have an account? <FormsLink to="/algin">Log in</FormsLink></TextWrapper>
                )}
        </Form>
    );
};

export default InputsForm;