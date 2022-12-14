import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/checkout">Checkout</Link>
      &nbsp; | &nbsp;
      <Link to="/items">Shops</Link>
      &nbsp; | &nbsp;
      <Link to="/yourshop">Your Shop</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Orders</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
