import React, { useContext, useEffect } from 'react';
import './style.css';

import Logo from '../../atoms/Logo/Logo';
import Headline from '../../atoms/Headline/Headline';
import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { store } from '../../../utils/GlobalState';
import CartToast from '../CartToast';
import API from '../../../utils/API';

function Header(){
  const globalState = useContext(store);
  const { dispatch } = globalState;

  let userId = "5f90df97d56aef06bcb010cb"

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
        .then(setCart(userId))
      rej(console.log('setUser rejected'))
    })
    newUser.then(setCart(userId))
  }

  useEffect(() => {
    setUser(userId)
  }, [])

  return (
    <header>
      <Row>
        <Col><Logo /></Col>
        <Col><Headline /></Col>
        <Col><Button href="/signup" variant="white">Sign Up</Button></Col>
        <Col><Button onClick={() => dispatch({type:"TOGGLEtoast"})}>Cart</Button></Col>
      </Row>
      <CartToast />
    </header>
  );
}
  
export default Header;