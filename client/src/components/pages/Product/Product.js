import React, {useParams} from 'react';
import "./style.css"

function Product(){

    let { id } = useParams();

    return (
        <div className="container">
            <h1>Product</h1>
            <p>ID: {id}</p>
        </div>
    );
}
  
export default Product;