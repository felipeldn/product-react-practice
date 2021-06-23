import './App.css';
import Product from './Product.js'
import productsData from './vschoolProducts.js';

function App() {

  const productComponents = productsData.map(product => {
    return(<Product key={product.id} name={product.name} price={product.price} description={product.description}/>
      )
    })

  return (
    <div className="products">
      {productComponents}
    </div>
  );
}

export default App;
