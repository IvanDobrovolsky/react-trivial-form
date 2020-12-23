import React from 'react';
import './formField.css';

export default function FormField({
    id,
    label,
    name,
    onInput,
    placeholder,
    type = 'text',
    validator,
}) {
    const { isValid, errors } = validator;
    return (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <input
                className="c-form-field"
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                onInput={(e) => onInput(e.target.value)}
            />
            {
                !isValid &&
                <div className="c-form-field__error">{errors[0].error}</div>
            }
        </div>
    )
}
