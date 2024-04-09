import React from 'react'
import { useParams, Route } from 'react-router-dom'
import CommentsPage from './CommentsPage'
// import { ProductArr } from '../components/ProductArray'
// import ProductArr from '../components/ProductArray'
import {ProductArr} from '../components/ProductArray';



const ProductDetails = () => {
  const productid= useParams()

  const items= ProductArr.find(product => product.id ===parseInt(productid.productid)) 

  return (

    <div>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>
      <h1>This is product detail page</h1>

      <div>
        <img src={items.image} alt='Product'></img>
        <p>{items.title}</p>
        <p>{items.description}</p>
        <p>${items.price}</p>
      </div>



      {/* <p>{productid.productid}</p> */}


      <Route path={`/Product/${productid.productid}/Comments`} >
        <CommentsPage />
      </Route>



    </div>

  )
}

export default ProductDetails
