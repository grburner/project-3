import React, {useState, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './style.css';

import Logo from '../../atoms/Logo/Logo';
import Headline from '../../atoms/Headline/Headline';
import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { store } from '../../../utils/GlobalState';
import API from '../../../utils/API';
import ShoppingCartButton from '../../molecules/ShoppingCartButton'

function Header(){
  const history = useHistory();
  const location = useLocation();
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
          history.push('/');
        })
        .catch(err => console.log(err)); 

    } else {
      // if user is not logged in, take them to login page
      history.push('/login');
    }
  };

  const showCart = () => {
    dispatch({ type: 'TOGGLEtoastSHOW' });
  };

  // let consumerString = "/consumer/" + globalState.state.userId

  const portalButton = () => {
    if(globalState.state.userRole === 'consumer'){
      return (<Col>
        <div className="your-portal">
        {/* <Button href={consumerString} variant="white"><i class="fa fa-user" aria-hidden="true"></i></Button> */}
        <Button onClick={() => history.push('/consumer')} variant="white"><i class="fa fa-user" aria-hidden="true"></i></Button>
        </div>
        </Col> )
    } else if (globalState.state.userRole === 'retailer') {
      return ''
    } else {
      return(<Col>
        <div className="your-portal">
        <Button href="/retailer" variant="white"><i class="fa fa-user" aria-hidden="true"></i></Button>
        </div>
        </Col>)
    }
  }

  return (
    <header className="container-fluid">
      <Row>
        <Col xl={2} lg={2} md={2} sm={2} xs={2}><Logo /></Col>
        <Col xl={8} lg={7} md={6} sm={6} xs={4}><Headline /></Col>
        <Col xl={2} lg={3} md={4} sm={4} xs={6}>
          <Row>
          {globalState.state.userId 
            ? 
            portalButton()
            : 
            ''
          }
            <Col>
              {globalState.state.userId ? '' : <Button href="/signup" variant="white">Sign Up</Button>}
              {globalState.state.userRole === 'retailer' && location.pathname === '/' ? <Button variant="white" onClick={() => history.push('/retailer')}>Retail</Button> : ''}
              {globalState.state.userRole === 'retailer' && location.pathname === '/retailer'? <Button variant="white" onClick={() => history.push('/')}>Market</Button> : ''}
              {globalState.state.userRole === 'consumer' ? 
                <ShoppingCartButton onClick={showCart}/>
                :
                ''
              }
            </Col>
            <Col>
            {globalState.state.userId 
            ? 
            <div className="logout">
              <Button variant="white" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i></Button>
            </div>
            : 
            <div className="login-button">
              <Button variant="white" onClick={logout}>Login</Button>
            </div>
            }
              
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}
  
export default Header;