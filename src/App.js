import './App.css';
import Product from './Product.js'
import productsData from './vschoolProducts.js';

function App() {

  const productComponents = productsData.map(item => {
    return(<Product key={item.id} product={item}/>
      )
    })

  return (
    <div className="products">
      {productComponents}
    </div>
  );
}

export default App;
