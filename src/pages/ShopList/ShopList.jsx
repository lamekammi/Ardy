import ShopDetail from '../ShopDetail/ShopDetail';
import EditItem from '../../components/EditItem/EditItem';
import DeleteItem from '../../components/DeleteItem/DeleteItem';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
// needs to show every shop created
// and have a Link to see the shop's details to see the items a shop has


export default function ShopList({ item, user, setUser }) {
    const [storeItems, setStoreItems] = useState([])

    useEffect(function () {
        async function getAll() {
            const items = await itemsAPI.getAll();
            setStoreItems(items);
        }
    })


    const items = item.map((item, idx) => {
        <div>
            <ul>
                <li>Item: {item.name}
                    Price: {item.price}</li>
                    <EditItem user={user} setUser={setUser} /> <DeleteItem user={user} setUser={setUser}/>
            </ul>
        </div>
    });
    return(
        <>
            <h1>ShopList</h1>
            <div>
                {items}
            </div> 
        </>
        
    )
}