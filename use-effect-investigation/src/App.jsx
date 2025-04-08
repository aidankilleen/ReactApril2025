import { useEffect, useState } from 'react'
import './App.css'

function App() {

  
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("all");

  useEffect(()=>{
    fetch(`https://api.acodingtutor.com/sales${currentProduct != 'all' ? `?product=${currentProduct}`: ''}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSales(data);

        if (currentProduct == 'all') {
          let productList = new Set();
          for (const item of data) {
            productList.add(item.product);
          }
          setProducts([...productList]);
          
          setCurrentProduct(data[0].product);
        }
      })

  }, [currentProduct]); // if no depencencies, the hook / effect is run only once

  const onProductSelect = (evt)=>{
    setCurrentProduct(evt.target.value);
  }
  return (
    <>
      <h1>Use Effect</h1>
      <select onChange={onProductSelect}>
        {products.map(product=><option key={product}>{product}</option>)}
      </select> {currentProduct}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Colour</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { sales
              .map(sale => <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>{sale.colour}</td>
              <td>{sale.quantity}</td>
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
