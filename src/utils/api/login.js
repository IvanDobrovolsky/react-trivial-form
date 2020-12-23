const API_URL = '';

// Disgustingly faked method
export function login({ email, password }) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ email, password}),
    });
}
