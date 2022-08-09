import AddItem from "../../components/AddItem/AddItem";
import AddShop from "../../components/AddShop/AddShop";
import EditShop from "../../components/Editshop/EditShop";
import EditItem from "../../components/EditItem/EditItem";


//needs to be able to create a shop
// needs to be able to edit a shop
// needs to be able to add items and edit items to a shop


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