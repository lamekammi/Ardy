import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRed } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistory from "../OrderHistory/OrderHistory";
//import ItemList from '../../components/ItemList';
// needs to be able to see all items in cart
// needs to be able to see a total of all the items
// needs a checkout function where will render to order history page with
//      past orders the user has made

export default function CheckoutPage() {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll();
        }
        getItems();
        async function getCart() {
            const cart =await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);

    //event handlers:
    async function handleAddToOrder(itemId) {
        const cart = await ordersAPI.addItemToCart(itemId);
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    return(
        <>
            <h1>CheckoutPage</h1>
            <p><OrderHistory /></p>
        </>
        
    )
}