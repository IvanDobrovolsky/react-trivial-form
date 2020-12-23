export function required(value) {
    return String(value).length > 0;
}

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export function isEmailValid(value) {
    return emailRegEx.test(value);
}

export function minLength(length) {
    return (value) => String(value).length >= length;
}
