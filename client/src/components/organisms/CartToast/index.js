import React, { useState, useContext, useEffect } from 'react';

// UTILS
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';

// COMPONENTS
import CartDetail from '../../molecules/CartDetail/index';
import Button from '../../atoms/Button/Button';
import StripeCheckoutForm from '../../molecules/StripeCheckoutForm';

// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';

// STRIPE
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe('pk_test_51HlK4mEvE5s7arjumolwyCiIE9nvH6na72khlufapzEhuSDMkn9YZFlLf7GlaHNQKbFQYsLKBBGZj0NfEgRYJR3j00PgajqeRI');

const CartToast = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [cartData, setCartData] = useState();
  const [cartTotal, setCartTotal] = useState();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirm, setShowConfirm] = useState(true);

  // Gets info for each item in the users cart
  useEffect(() => {
    let promises = [];

    if (globalState.state.userCart) {
      globalState.state.userCart.forEach(elem => {
        promises.push(
          API.getProductsID(elem.product_id)
            .then(
              data => { return {
                'name': data.data.name,
                'price': data.data.price,
                'retailer_id': data.data.retailer_id,
                'units': data.data.units,
                'order_units': 1,
                'product_id': data.data._id
              };})
        );
      });
      Promise.all(promises)
        .then((values) => {setCartData(values);});
    }
  }, [globalState]);

  // Sets cart total
  useEffect(() => {
    let total = 0;
    if (cartData) {
      cartData.forEach(item => {
        total += (item.order_units * item.price);
      });
    }
    setCartTotal(total);
  }, [cartData]);

  // Updates or removes cart items (passed as a prop)
  const handleChange = (e, name, type) => {
    const value = e.target.value;
    cartData.forEach(elem => {
      if (name === elem.name) {
        if (type === 'change') {
          changeState('order_units', name , value);
        } else if (type === 'remove') {
          let revisedCart = [];
          if (elem.name === name) {
            globalState.state.userCart.forEach(item => {
              if (elem.product_id !== item.product_id) {
                revisedCart.push(item);
              }
            });
            dispatch({ type: 'SETuserCart', payload: revisedCart });
            API.updateCart(globalState.state.userId, revisedCart);
          }
        }
      }
    });
  };

  // Resets cartData 
  const changeState = (field, name, value) => {
    const newData = cartData.map(d => {
      if (name === d.name) {
        d[field] = value;
      }
      return d;
    });
    setCartData(newData);
  };

  // Group cart items by retailer ID
  const createOrder = () => {
    let orders = [];
    let uniqueRetailers = [];

    // adds unique retailers to uniqueRetailers array
    cartData.forEach(elem => {
      if (uniqueRetailers.indexOf(elem.retailer_id) === -1) {
        uniqueRetailers.push(elem.retailer_id);
      }
    });

    // create order template for each retailer
    uniqueRetailers.forEach(elem => {
      orders.push({
        'retailer_id' : elem,
        'user_id': globalState.state.userId,
        'date': new Date(),
        'status': 'open',
        'detail': []
      });
    });

    // loop through each cart item and add to the matching retailer ID cart item
    cartData.forEach(elem => {
      let index = 0;
      let id = elem.retailer_id;
      orders.forEach(order => {
        if (id === order.retailer_id) {
          orders[index].detail.push({
            'product_id': elem.product_id,
            'quantity': Number(elem.order_units),
            'price': elem.price
          });
          index += 1;
        } else {
          index += 1;
        }
        //FIX THIS ^^^ 
      });
    });
    setShowCheckout(true);
    sendOrders(orders);
    setShowConfirm(false);
  };

  // Send an order to the retailer order table
  const sendOrders = (orders) => {
    orders.forEach(order => {
      API.createNewOrder(order);
    });
  };

  // Logic to render checkout messages
  const toggleShowCheckout = () => {
    !showCheckout ? setShowCheckout(true) : setShowCheckout(false);
    setShowConfirm(false);
    !showSuccess ? setShowSuccess(true) : setShowSuccess(false);
    setCartData([]);
  };

  return(
    <Modal 
      show={globalState.state.toastState}
      onHide={() => {dispatch({type: 'TOGGLEtoastHIDE'});}}
      size="lg"
    >
      <Modal.Header  closeButton>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Your Cart</strong>
        <strong>{cartTotal ? '$' + cartTotal.toFixed(2) : ''}</strong>
      </Modal.Header>
      <Modal.Body>
        {cartData ? cartData.map((elem, index) => (
          <CartDetail key={index} data={elem} onChange={handleChange}></CartDetail>
        )): ''}
        {showCheckout ?
          <Elements stripe={promise}>
            <StripeCheckoutForm amount={cartTotal} toggleView={toggleShowCheckout}/> 
          </Elements> 
          : ''}
        { showSuccess ? <p>Success! Your wine is on the way!</p> : ''}
      </Modal.Body>
      {cartTotal && showSuccess === 0 ? <p>Add some wine to your cart!</p> : ''}
      {showConfirm && cartTotal ? <Button onClick={() => createOrder()}>Checkout</Button> : '' }
    </Modal>
  );
};

export default CartToast;