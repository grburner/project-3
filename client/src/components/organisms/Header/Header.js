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
        <Col xs={2}><Logo /></Col>
        <Col xs={8}><Headline /></Col>
        <Col xs={2}>
          <Row>
            <Col>
              <Button variant="white" onClick={logout}>{globalState.state.userId ? 'Logout' : 'Login'}</Button>
            </Col>
            <Col>
              {globalState.state.userId ? '' : <Button href="/signup" variant="white">Sign Up</Button>}
              {globalState.state.userId ? 
                <div onClick={showCart}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>            
              </div> :
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