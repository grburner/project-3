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
  let userId = '5f90df97d56aef06bcb010cb';

  const [product, setProduct] = useState({});
  const [retailer, setRetailer] = useState({
    name: ''
  });

  // on load set cart to global state
  // on product click -> get globalcart, append new item, call patch to update DB cart

  // set product data locally on load
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

  // set cart globally on load
  const setCart = (userId) => {
    API.getUser(userId)
      .then(res => {
        console.log('set Cart data')
        console.log(res.data.cart); 
        dispatch({ type: 'SETuserCart', payload: res.data.cart })
      });
    }

  // const setUser = (userId) => {
  //   const newUser = new Promise((res, rej) => {
  //     res(dispatch({ type: 'SETcurrentUser', payload: userId}));
  //     rej(console.log('setUser rejected'));
  //   });
  //   newUser.then(setCart(userId));
  // };

  const updateCart = (id) => {
      let cart = globalState.state.userCart
      cart.push({'product_id': id});
      console.log(cart)
        dispatch({ type: 'SETuserCart', payload: cart})
      };

  const updateDatabaseCart = () => {
    console.log(globalState.state.userCart)
    API.updateCart(userId, globalState.state.userCart)
      .then(res => console.log(res))
  }

  useEffect(() => {
    getProductDatabyId();
    setCart(userId);
  }, []);

  let defaultImage = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';

  return (
    <div className="container">
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
              <Button onClick={() => updateCart(id)}>Buy Now</Button>
              <Button onClick={() => updateDatabaseCart()}>Update Cart</Button>
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

// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './style.css';
// import Button from '../../atoms/Button/Button';
// import { store } from '../../../utils/GlobalState';
// import API from '../../../utils/API';



// function Product(){
//   const globalState = useContext(store);
//   const { dispatch } = globalState;

//   let { id } = useParams();
//   let userId = '5f90df97d56aef06bcb010cb';

//   const [product, setProduct] = useState({});
//   const [retailer, setRetailer] = useState({
//     name: ''
//   });

//   const getProductDatabyId = () => {
//     API.getProductsID(id)
//       .then(res => {
//         setProduct(res.data);
//         API.findRetailerById(res.data.retailer_id)
//           .then(res => {
//             console.log('FIND RETAILER BY ID');
//             console.log(res);
//             setRetailer({
//               name: res.data.company_name
//             });
//           })
//           .catch(err => console.log(err));
//       })
//       .then(()=>{
       
//       })
//       .catch(err => console.log(err));
//   };

//   const addToCart = (id) => {
//     let cart = globalState.state.userCart

//     if (cart.indexOf(id) === -1 ) {
//       cart.push(id)
//       dispatch({ type: 'ADDtoCart', payload: cart})
//       let cartBody = []
//       globalState.state.userCart.forEach(item => {
//         cartBody.push({"product_id": item})
//       })
//       const body = {"cart": cartBody}
//       console.log(body)
//       API.updateCart(userId, body)
//     }
//   }

//   const setCart = (id) => {
//     if (globalState.state.userCart.length === 0) {
//       console.log('into set cart')
//       let cartArray = []
//       API.getUser(id)
//         .then(res => res.data.cart.forEach(elem => {
//           cartArray.push(elem.product_id)
//         }))
//         .then(res => dispatch({ type: 'SETuserCart', payload: cartArray })
//         )
//       }
//     }

//     // API.getUser(id)
//     //   .then(res => dispatch({ type: 'SETuserCart', payload: res.data.cart })

//   const setUser = (userId) => {
//     const newUser = new Promise((res, rej) => {
//       res(dispatch({ type: 'SETcurrentUser', payload: userId}));
//       rej(console.log('setUser rejected'));
//     });
//     newUser.then(setCart(userId));
//   };

//   useEffect(() => {
//     getProductDatabyId();
//     setUser(userId);
//   }, []);

//   let defaultImage = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';

//   return (
//     <div className="container">
//       <div className="product">
//         <h1>{ product.name }</h1>
//         <p style={{color:'#930045'}}><strong>Retailer: { retailer.name }</strong></p>
//         <p><em>ID #: {id}</em></p>
//         <hr />
//         <div className="row">
//           <div className="col-md-6">
//             <div className="image-wrapper">
//               <img src={ product.image ? product.image : defaultImage} />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <ul style={{textAlign:'left', listStyleType:'none'}}>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Description:</strong> { product.description }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Country:</strong> { product.country }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Grape Blend:</strong> { product.grape_blend }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Size:</strong> { product.size }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Price</strong> { product.price }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Type:</strong> { product.type1 }</li>
//               <li><i className="fa fa-glass" aria-hidden="true"></i><strong>Style:</strong> { product.type2 }</li>
//               <br/>
//               <Button onClick={() => addToCart(id)}>Buy Now</Button>
//            </ul>
//         </div>
         
//         </div>
//         <div className="row">
//           <div className="col">
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
  
// export default Product;