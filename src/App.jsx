
import './App.css'
import {useState} from 'react';

import Header from './Components/Header/Header'
import Product from './Components/Product/Product'


function App() {
  const [products, setProducts] = useState ( [
    { id: 1, title: 'A sign of Four', arthor: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 2, title: 'A Study in Scarlet', arthor: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 3, title: 'Baskervilles Hound', arthor: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
    { id: 4, title:'The Adventures of Sherlock Holmes', arthor: 'Av Sir Arthur Conan Doyle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vel distinctio aperiam nobis. Culpa aliquid nemo aliquam dolorum illo cum nobis quos dolore quas, voluptatibus maiores, veritatis perferendis distinctio.' },
  ]);
  
  const [cart, setCart] = useState ([])

  // FYI - i products.map((*product*) => altså (product, kan man själv välja namnet på variabeln))
  const productComponents = products.map((product) => {
    return <Product title = {product.title} arthor = {product.arthor} description = {product.description} key = {product.id} addNewProduct = {addNewProduct} /> 
  });

  function addNewProduct(bookFromProduct) {
    console.log(`Adding new book: ${bookFromProduct}`);

    const newBook = {
      id: cart.length + 1,  
      title: bookFromProduct.title, 
      arthor: bookFromProduct.arthor, 
      description: bookFromProduct
    }
    console.log(newBook);

    const tempProductsArray = [...cart];
    tempProductsArray.push(newBook);

    setCart(tempProductsArray);
  }

  return (
    <div className="App">
      <Header /> 
      <section className='grid-container'>
         {productComponents}
      </section>
    </div>
  )
}
// i Header updateCart ={addNewProduct}???
export default App
