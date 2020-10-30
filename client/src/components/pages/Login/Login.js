/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import API from '../../../utils/API';
import Button from '../../atoms/Button/Button';
import { store } from '../../../utils/GlobalState';
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory()
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [userState, setUserState] = useState({
    username: '',
    password: '',
    redirectTo: null
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserState({
      ...userState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    API.getUserLogin(userState)
      .then(response => {
        if (response.status === 200) {
          API.getUserByName(response.data.username).then(res => {
            if (!res.data.error) {
              dispatch({ type: 'SETuser', payload: { userRole: res.data[0].role, userId: res.data[0]._id }});
              if (res.data[0].role === 'consumer') {
                history.push('/')
              } else if (res.data[0].role === 'retailer') {
                history.push('/retailer')
              }
            } else {
              console.log('error signing up')
            }
          })
        }
      }).catch(error => {
        console.log('login error: ');
        console.log(error);
                
      });
    };




  if (userState.redirectTo) {
    return <Redirect to={{ pathname: userState.redirectTo }} />;
  } else {
    return (
      <div>
        <h2 style={{color:'#930045', marginTop:'20px'}}>Login</h2>
        <form className="form-horizontal login-form">
          <div className="form-group">
            <div className="col-12">
              <label className="form-label" htmlFor="username">Username</label>
            </div>
            <div className="col-12">
              <input className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={userState.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-12">
              <label className="form-label" htmlFor="password">Password: </label>
            </div>
            <div className="col-12">
              <input className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={userState.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group ">
            <Button onClick={handleSubmit}>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login; 