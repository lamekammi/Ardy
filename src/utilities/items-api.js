import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export function getAll() {
    return sendRequest(`${BASE_URL}/items`);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/items/${id}`);
}

export function newItem() {
    return sendRequest(`${BASE_URL}/items/new`);
}

export function createItem(item) {
    return sendRequest(`${BASE_URL}/items/create`, 'POST', { item });
}

export function deleteItem(id) {
    return sendRequest(`${BASE_URL}/items/${id}`, 'DELETE');
}

export function editItem(id) {
    return sendRequest(`${BASE_URL}/items/${id}/edit`, { id });
}

export function updateItem(id) {
    return sendRequest(`${BASE_URL}/items/${id}`);
}