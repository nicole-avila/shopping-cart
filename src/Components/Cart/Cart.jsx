import './Cart.css'

function Cart(props) {
    console.log(props);
    props.cart
    return (
        <article>
        <a href="#">Cart <span>{props.cart.length}</span></a>
        </article>
    )
}

export default Cart;