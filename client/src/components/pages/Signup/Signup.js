/* eslint-disable no-console */
import React, {useState, useEffect, useContext} from 'react';
import './style.css';
import API from '../../../utils/API';
import Button from '../../atoms/Button/Button';
import { store } from '../../../utils/GlobalState';
import { useHistory } from "react-router-dom";

function Signup(){
  let history = useHistory()
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [userState, setUserState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'consumer',
    name: '',
    address_street1: '',
    address_street2: '',
    address_city: '',
    address_state: '',
    address_zip: '',
    phone_number: '',
    company_name: '',
    // ships_to: [''],
    bio: '',
    birth_date: '',

  });

  const [role, setRole] = useState({
    role: ''
  });

  const [error, setError] = useState({
    message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserState({
      ...userState,
      [name]: value,  
    });
    // console.log(userState);
    if(value === 'consumer'){
      setRole({
        role: 'consumer'
      });
    }
    if(value === 'retailer'){
      setRole({
        role: 'retailer'
      });
    }
  };

const handleSubmit = (e) => {
  // console.log(userState);
  e.preventDefault();
  if(userState.password && userState.role && userState.username && userState.name){
    //request to server to add a new username/password
    API.createUser(userState)
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log('successful signup');
          dispatch({ type: 'SETuser', payload: {userRole: response.data.role, userId: response.data._id}});
          history.push('/')
        } else {
          console.log('username already taken');
          setError({
            message: 'Username already taken'
          });
        }
      }).catch(error => {
        console.log('signup error: ');
        console.log(error);
      });
  } else {
    setError({
      message: 'Fill out all required fields!'
    });
  }
};
  return (
    <div className="container signup-page">
      <h2 style={{color:'#930045', marginTop:'20px'}}>Sign Up:</h2>
      {error.message.length <= 0 ? <div></div> : <div className="error-message">{error.message}</div>}
      <div className="signup-form">
        <label htmlFor="role">User Type: <strong style={{color:'#930045'}}>*</strong></label>&nbsp;&nbsp;
        <select 
          id="role" 
          name="role" 
          value={userState.role}
          onChange={handleChange}>
          <option id="consumer" value="consumer">I want to buy wine!</option>
          <option id="retailer" value="retailer">I want to sell wine!</option>
        </select>
        <br />
        Email (Username): <strong style={{color:'#930045'}}>*</strong> <input 
          name="username" 
          value={userState.username}
          onChange={handleChange}></input><br />
        Password: <strong style={{color:'#930045'}}>*</strong><input 
          name="password"
          type="password" 
          value={userState.password}
          onChange={handleChange}></input><br />
        Name: <strong style={{color:'#930045'}}>*</strong><input 
          name="name"
          value={userState.name}
          onChange={handleChange}></input><br />
        Phone: <input 
          name="phone_number"
          value={userState.phone_number}
          onChange={handleChange}></input><br />
        {/* Birthdate = consumer only */}
        Birthdate: <input 
          name="birth_date"
          type="date" 
          value={userState.birth_date}
          onChange={handleChange}></input><br />
        <br />
        Address Line 1: <input 
          name="address_street1"
          value={userState.address_street1}
          onChange={handleChange}></input><br />
        Address Line 2: <input 
          name="address_street2"
          value={userState.address_street2}
          onChange={handleChange}></input><br />
        City: <input 
          name="address_city"
          value={userState.address_city}
          onChange={handleChange}></input><br />
        State: <input 
          name="address_state"
          value={userState.address_state}
          onChange={handleChange}></input><br />
        Zip: <input 
          name="address_zip"
          value={userState.address_zip}
          onChange={handleChange}></input><br />
        <br />
        {/* Company Bio and Ship To States = retailer only */}
        {role.role === 'retailer' 
          ? 
          <div>
          Company Name: <input 
              name="company_name"
              value={userState.company_name}
              onChange={handleChange}></input><br />
          Company Bio:
            <textarea 
              name="bio" 
              value={userState.bio}
              style={{width:'100%'}}
              onChange={handleChange}></textarea>
            <br />
          </div> 
          : 
          <div></div>}
        
        {/* <label htmlFor="ships_to">Select States You Can Ship To: </label>
        <select 
          id="ships_to" 
          name="ships_to" 
          value={userState.ships_to}
          onChange={handleChange}
          multiple>  
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="DC">Washington DC</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select><br />
        (Hold down the ctrl key and click to select multiple states)
        <br /> */}
        <Button onClick={handleSubmit}>Sign Up</Button>
      </div>
    </div>
  );
}
  
export default Signup;