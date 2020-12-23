import { getErrorMessage } from './errorMessages';

export default function useValidator({ name, value, validators = {} }) {
    const errors = Object
        .keys(validators)
        .filter((validatorName) => !validators[validatorName](value))
        .map((validatorName) => ({
            validatorName,
            error: getErrorMessage(validatorName)(name),
        }));
    const isValid = errors.length === 0;
    return {
        isValid,
        value,
        errors,
    };
}
