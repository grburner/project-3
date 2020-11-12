import React, {useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import Logo from '../../atoms/Logo/Logo';
import Headline from '../../atoms/Headline/Headline';
import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { store } from '../../../utils/GlobalState';
import API from '../../../utils/API'

function Header(){
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  let userId = globalState.state.userId;
  // let userId = '5f90df97d56aef06bcb010cb';

  const logout = () => {
    if(globalState.state.userId){
      // if user is logged in, log them out
      API.logout()
      .then(res => {
        console.log('Logout');
        console.log(res);
        dispatch({ type: 'SETuser', payload: { userRole: '', userId: '' }});
        history.push('/')
      })
      .catch(err => console.log(err)); 

    } else {
      // if user is not logged in, take them to login page
      history.push('/login')
    }
  }

  const showCart = () => {
    dispatch({ type: 'TOGGLEtoastSHOW' })
  }

  return (
    <header>
      <Row>
        <Col xl={2} lg={2} md={2} sm={2} xs={2}><Logo /></Col>
        <Col xl={8} lg={7} md={6} sm={6} xs={4}><Headline /></Col>
        <Col xl={2} lg={3} md={4} sm={4} xs={6}>
          <Row>
            <Col style={{textAlign:"right"}}>
              <Button variant="white" onClick={logout}>{globalState.state.userId ? 'Logout' : 'Login'}</Button>
            </Col>
            <Col>
              {globalState.state.userId ? '' : <Button href="/signup" variant="white">Sign Up</Button>}
              {globalState.state.userId ? 
              <Button variant="white" onClick={showCart}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Button>
              :
              ''
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}
  
export default Header;