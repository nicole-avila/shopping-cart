import './Header.css'
import Holms from './Image/holms.png'
import Cart from '../Cart/Cart';

function Header(props) {
    props.updateCart

    return (
        <header>
        <img className='Holms-image' src= { Holms } alt="A man with a cigarr" />
        <Cart cart ={props.updateCart}/>
        </header>
    )

}
export default Header;
