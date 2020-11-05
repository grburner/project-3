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
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}
  
export default Header;