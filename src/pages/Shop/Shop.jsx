import AddItem from "../../components/AddItem/AddItem";
import AddShop from "../../components/AddShop/AddShop";
import EditShop from "../../components/Editshop/EditShop";
import EditItem from "../../components/EditItem/EditItem";

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