import './Product.css'
// import Cart from '../Cart/Cart';

function Product(props) {
    console.log(props);
    let newBook = '';


    function handleClick() {
        console.log(`Lägger till bok: ${newBook}`);
        props.addSelectedBook(newBook);
    }

    return(
        <div>
        <article className='product'>
            <h2 className='product__title'>{props.title}</h2>
            <p className='product__secondline'>{props.arthor}</p>
            <p className='product__text'>{props.description}</p>
            <button className='product__btn' onClick= { handleClick } >Add to cart</button>
        </article>

        </div>
     
    )
}
export default Product; 
