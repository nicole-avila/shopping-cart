import './App.css'
import {useState} from 'react';

import Header from './Components/Header/Header'
import Product from './Components/Product/Product'


function App() {
  const [products, setProducts] = useState ( [
    { id: 1, title: 'A sign of Four', author: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 2, title: 'A Study in Scarlet', author: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 3, title: 'Baskervilles Hound', author: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 4, title:'The Adventures of Sherlock Holmes', author: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
  ]);
  
  const [cart, setCart] = useState([])

  const productComponents = products.map((product) => {
    return <Product addSelectedBook = {selectedBook} title = {product.title} aurthor = {product.author} description={product.description} key={product.id} id={product.id} /> 
  });

  function selectedBook(props) {
    props.id

    const newBook = {
      id: selectedBook.id,
      title: props.title, 
      author:props.author, 
      description:props.description
    }
    console.log(newBook);

    const tempProductsArray = [...cart];
    tempProductsArray.push(newBook);

    setCart(tempProductsArray);
    // props.selectedBook(newBook);
  }

  return (
    <div className="App">
      <Header updateCart={cart} /> 
      <section className='grid-container'>
         {productComponents}
      </section>
    </div>
  )
}
// i Header updateCart ={addNewProduct}???
export default App
