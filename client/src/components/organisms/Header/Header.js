import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Logo from '../../atoms/Logo/Logo';
import Headline from '../../atoms/Headline/Headline';
import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { store } from '../../../utils/GlobalState';

function Header(){
  const globalState = useContext(store);
  const [userState, setUserState] = useState({
    role: ''
  });

  useEffect(()=>{
    setUserState({
      role: globalState.state.userRole
    });
  },[globalState]);

  return (
    <header>
      <Row>
        <Col><Logo /></Col>
        <Col><Headline /></Col>
        <Col>
          {userState.role.length > 0 ? <Button href={userState.role === 'retailer' ? '/retailer' : '/consumer'} variant="white">{userState.role === 'retailer' ? 'Retailer' : 'Consumer'} Portal</Button> : <Button href="/signup" variant="white">Sign Up</Button>}
        </Col>
      </Row>
    </header>
  );
}
  
export default Header;