import ShopDetail from '../ShopDetail/ShopDetail';
import { Link } from "react-router-dom";

// needs to show every shop created
// and have a Link to see the shop's details to see the items a shop has


export default function ShopList() {

    return(
        <>
            <h1>ShopList</h1>
            <p><Link to="/shopdetail">Shop Detail</Link></p>
        </>
        
    )
}