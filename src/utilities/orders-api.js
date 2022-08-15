import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// retrive an unpaid order for the logged in user
export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
};

// add an item to the cart
export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
};

//update the item's qty in the cart
export function setItemQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
};

//updates the order's cart isPaid property to true
export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
};

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}
