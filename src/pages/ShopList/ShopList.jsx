import ShopDetail from '../ShopDetail/ShopDetail';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
// needs to show every shop created
// and have a Link to see the shop's details to see the items a shop has


export default function ShopList({ item }) {
    const [storeItems, setStoreItems] = useState([])

    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll();
            setStoreItems(items);
        }
    })


    const items = item.map((item, idx) => {
        <div>
            <ul>
                <li>Item: {item.name}
                    Price: {item.price}</li>
            </ul>
        </div>
    });
    return(
        <>
            <h1>ShopList</h1>
            <div>
                {items}
                <p><Link to="/shopdetail">Shop Detail</Link></p>
            </div> 
        </>
        
    )
}