import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Button from '../../atoms/Button/Button';
import { store } from '../../../utils/GlobalState';
import API from '../../../utils/API';



function Product(){
  const globalState = useContext(store);
  const { dispatch } = globalState;

  let { id } = useParams();
  let userId = "5f90df97d56aef06bcb010cb"

  const [product, setProduct] = useState({});

  const getProductDatabyId = () => {
    API.getProductsID(id)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  };

  const addToCart = (id) => {
    let cart = globalState.state.userCart

    if (cart.indexOf(id) === -1 ) {
      cart.push(id)
      dispatch({ type: 'ADDtoCart', payload: cart})
      let cartBody = []
      globalState.state.userCart.forEach(item => {
        cartBody.push({"product_id": item})
      })
      const body = {"cart": cartBody}
      console.log(body)
      API.updateCart(userId, body)
    }
  }

  const setCart = (id) => {
    if (globalState.state.userCart.length === 0) {
      console.log('into set cart')
      let cartArray = []
      API.getUser(id)
        .then(res => res.data.cart.forEach(elem => {
          cartArray.push(elem.product_id)
        }))
        .then(res => dispatch({ type: 'SETuserCart', payload: cartArray })
        )
      }
    }

  const setUser = (userId) => {
    const newUser = new Promise((res, rej) => {
      res(dispatch({ type: 'SETcurrentUser', payload: userId}))
        // .then(setCart(userId))
      rej(console.log('setUser rejected'))
    })
    newUser.then(setCart(userId))
  }

  useEffect(() => {
    getProductDatabyId();
    setUser(userId)
  }, []);

  let defaultImage = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';

  return (
    <div className="container">
      <div className="product">
        <h1>{ product.name }</h1>
        <p><em>ID #: {id}</em></p>
        <hr />
        <div className="row">
        <div className="col-md-6">
            <div className="image-wrapper">
              <img src={ product.image ? product.image : defaultImage} />
            </div>
          </div>
          <div className="col-md-6">
            <ul style={{textAlign:'left', listStyleType:'none'}}>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Description:</strong> { product.description }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Country:</strong> { product.country }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Grape Blend:</strong> { product.grape_blend }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Size:</strong> { product.size }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Price</strong> { product.price }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Type:</strong> { product.type1 }</li>
              <li><i class="fa fa-glass" aria-hidden="true"></i><strong>Style:</strong> { product.type2 }</li>
              <br/>
              <Button onClick={() => addToCart(id)}>Buy Now</Button>
           </ul>
        </div>
         
        </div>
        <div className="row">
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Product;