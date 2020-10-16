import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

import API from '../../../utils/API';



function Product(){

  let { id } = useParams();

  const [product, setProduct] = useState({})

  const productData = "";

  const getProductDatabyId = () => {
    API.getProductsID(id)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProductDatabyId();
  }, []);


  return (
    <div className="container">
      <h1>{ product.name }</h1>
      <p><em>ID #: {id}</em></p>
      <hr />
      <ul style={{textAlign:"left"}}>
        <li>Description: { product.description }</li>
        <li>Country: { product.country }</li>
        <li>Grape Blend: { product.grape_blend }</li>
        <li>Size: { product.size }</li>
        <li>Price { product.price }</li>
        <li>Type: { product.type1 }</li>
        <li>Style: { product.type2 }</li>
      </ul>
    </div>
  );
}
  
export default Product;