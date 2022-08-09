import OrderHistory from "../OrderHistory/OrderHistory";
// needs to be able to see all items in cart
// needs to be able to see a total of all the items
// needs a checkout function where will render to order history page

export default function CheckoutPage() {

    return(
        <>
            <h1>CheckoutPage</h1>
            <p><OrderHistory /></p>
        </>
        
    )
}