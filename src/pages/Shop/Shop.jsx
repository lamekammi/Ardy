import AddItem from "../../components/AddItem/AddItem";
import AddShop from "../../components/AddShop/AddShop";
import EditShop from "../../components/Editshop/EditShop";
import EditItem from "../../components/EditItem/EditItem";


//needs to be able to create a shop
//      - add shop comp
// needs to be able to edit a shop
//      - edit shop comp
// needs to be able to add items and edit items to a shop
//      - edit item comp
//      - add item comp


export default function Shop() {

    return(
        <>
            <h1>Shop</h1>
            <AddShop />
            <EditShop />
            <AddItem />
            <EditItem />
        </> 
    )
};