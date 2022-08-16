import * as itemsAPI from '../../utilities/items-api';

import AddItem from "../../components/AddItem/AddItem";
import EditItem from "../../components/EditItem/EditItem";


//needs to be able to create a shop
//      - add shop comp
// needs to be able to edit a shop
//      - edit shop comp
// needs to be able to add items and edit items to a shop
//      - edit item comp
//      - add item comp


export default function Shop({ user, setUser }) {

    return(
        <>
            <h1>Shop</h1>
            <AddItem user={user} setUser={setUser}/>
        </> 
    )
};