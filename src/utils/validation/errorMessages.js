const errorsMap = {
    isEmailValid: () => 'Email is not valid',
    minLength: (field) => `${field} is too short`,
    required: (field) => `${field} is required`,
};

export function getErrorMessage(validatorName) {
    return (field) => errorsMap[validatorName](field);
}
