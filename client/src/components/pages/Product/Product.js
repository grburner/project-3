import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Button from '../../atoms/Button/Button';
import { store } from '../../../utils/GlobalState';
import API from '../../../utils/API';
import CartToast from '../../organisms/CartToast';


function Product(){
  const globalState = useContext(store);
  const { dispatch } = globalState;

  let { id } = useParams();
  // let userId = '5f90df97d56aef06bcb010cb';

  let userId = globalState.state.userId

  const [product, setProduct] = useState({});
  const [retailer, setRetailer] = useState({
    name: ''
  });

  const getProductDatabyId = () => {
    API.getProductsID(id)
      .then(res => {
        setProduct(res.data);
        API.findRetailerById(res.data.retailer_id)
          .then(res => {
            console.log('FIND RETAILER BY ID');
            console.log(res);
            setRetailer({
              name: res.data.company_name
            });
          })
          .catch(err => console.log(err));       
      })
      .catch(err => console.log(err));
  };

  const setCart = (userId) => {
    API.getUser(userId)
      .then(res => {
        console.log('set Cart data')
        console.log(res.data.cart); 
        dispatch({ type: 'SETuserCart', payload: res.data.cart })
      });
    }

  const updateCart = (id) => {
    let exists = false
    let cart = globalState.state.userCart
    cart.forEach(item => {
      if (item.product_id === id) {
        exists = true
      }
    })
    if (!exists) {
      cart.push({'product_id': id});
      dispatch({ type: 'SETuserCart', payload: cart})
      API.updateCart(userId, globalState.state.userCart)
      .then(res => console.log(res))
    }
  };

  const showCart = () => {
    dispatch({ type: 'TOGGLEtoastSHOW' })
  }

  useEffect(() => {
    getProductDatabyId();
    setCart(userId);
  }, []);

  let defaultImage = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';

  return (
    <div className="container" style={{minHeight: '80vh'}}>
    <CartToast />
      <div className="product">
        <h1>{ product.name }</h1>
        <p style={{color:'#930045'}}><strong>Retailer: { retailer.name }</strong></p>
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
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Description:</strong> { product.description }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Country:</strong> { product.country }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Grape Blend:</strong> { product.grape_blend }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Size:</strong> { product.size }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Price</strong> { product.price }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Type:</strong> { product.type1 }</li>
              <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Style:</strong> { product.type2 }</li>
              <br/>
              {globalState.state.userId ? 
                <Button onClick={() => updateCart(id)}><i class="fa fa-plus" aria-hidden="true"></i>Add To Cart</Button> :
                ''
              }
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