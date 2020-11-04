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
  // Set state
  const globalState = useContext(store);
  const [userState, setUserState] = useState({
    loggedin: false,
    role: '',
    text: 'Login'
  });

  useEffect(()=>{
    // Check if stored user exists
    if (!localStorage.getItem("userdata") === null) {
      // Get stored user data
      let data = JSON.parse(localStorage.getItem("userdata"));
      setUserState({
        loggedin: true,
        role: data[0].role,
        text: 'Logout'
      });
    } else {
      setUserState({
        loggedin: false,
        role: '',
        text: 'Login'
      });
    }
  },[]);

  useEffect(()=>{console.log(userState)},[userState])

  const logout = () => {
    if(userState.loggedin){
      // if user is logged in, log them out
      API.logout()
      .then(res => {
        console.log('Logout');
        console.log(res);
        window.localStorage.removeItem("userdata");
        setUserState({
          loggedin: false,
          role: '',
          text: 'Login'
        });
      })
      .catch(err => console.log(err)); 

    } else {
      // if user is not logged in, take them to login page
      // history.push('/login')
      window.location.href = "/login"
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
              <Button variant="white" onClick={logout}>{userState.text}</Button>
            </Col>
            <Col>
              <Button href="/signup" variant="white">Sign Up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}
  
export default Header;