import React, { useState } from 'react';
import FormField from '../../components/formField/formField';
import { required, minLength, isEmailValid } from '../../utils/validation/validators';
import useValidator from '../../utils/validation/useValidator';
import { login } from '../../utils/api/login';

import './loginForm.css';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailValidator = useValidator({
        name: 'email',
        value: email,
        validators: {
            required,
            isEmailValid,
        }});
    const passwordValidator = useValidator({
        name: 'password',
        value: password,
        validators: {
            required,
            minLength: minLength(3),
        }});
    const isValidForm = emailValidator.isValid && passwordValidator.isValid;
    return (
        <form className="c-login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                <FormField
                    id="email"
                    label="Email"
                    name="email"
                    onInput={setEmail}
                    placeholder="Enter your email"
                    validator={emailValidator}
                    value={email}
                />
            </div>
            <div className="row">
                <FormField
                    id="password"
                    label="Password"
                    name="password"
                    onInput={setPassword}
                    placeholder="Enter your password"
                    type="password"
                    validator={passwordValidator}
                    value={password}
                />
            </div>
            <div className="row c-login-form__submit">
                <div className="col">
                    <button
                        className={isValidForm ? '' : 'outline'}
                        disabled={!isValidForm}
                        onClick={() => login({ email, password})}
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
}
