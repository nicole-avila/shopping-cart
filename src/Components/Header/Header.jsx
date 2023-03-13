import './Header.css'
import Holms from './Image/holms.png'
import Cart from '../Cart/Cart';

function Header(props) {
    // props.updateProduct
    

    return (
        <header>
        <img className='Holms-image' src= { Holms } alt="A man with a cigarr" />
        <Cart />
        </header>
    )

}
export default Header;
