/* eslint-disable no-console */
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import API from '../../../utils/API';

function Login() {
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
        console.log('login response: ');
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          setUserState({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          setUserState({
            redirectTo: '/'
          });
          // Todo: use global user state
          // if(consumer) {
          //   window.location.href = "/consumer"
          // } else if (retailer) {
          //   window.location.href = "/retailer"
          // }
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
        <h4>Login</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">Username</label>
            </div>
            <div className="col-3 col-mr-auto">
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
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">Password: </label>
            </div>
            <div className="col-3 col-mr-auto">
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
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"
                               
              onClick={handleSubmit}
              type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login; 