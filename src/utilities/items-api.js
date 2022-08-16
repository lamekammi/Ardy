import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export function getAll() {
    return sendRequest(`${BASE_URL}/`);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function newItem() {
    return sendRequest(`${BASE_URL}/new`);
}

export function createItem(item) {
    return sendRequest(`${BASE_URL}/create`, 'POST', item);
}

export function deleteItem(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function editItem(id) {
    return sendRequest(`${BASE_URL}/${id}/edit`, id);
}

export function updateItem(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}