import './Cart.css'

function Cart(props) {
    console.log(props);
    return (
        <article>
        <a href="#">Cart</a>
        <p>{props.cart}</p>
        </article>
    )
}

export default Cart;