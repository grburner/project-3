import React, {useState, useContext, useEffect} from 'react';
import './style.css';
import API from '../../../utils/API';
import { useHistory } from 'react-router-dom';
import { store } from '../../../utils/GlobalState';
import Button from '../../atoms/Button/Button';  

function Consumer(){
  let history = useHistory();
  const globalState = useContext(store);
  const [consumer, setConsumer] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(()=>{
    console.log(globalState);
    API.getUser(globalState.state.userId)
      .then(res => {
        console.log('FIND USER BY ID');
        console.log(res);
        setConsumer({
          name: res.data.name,
          email: res.data.username,
          phone: res.data.phone_number,
          address1: res.data.address_street1,
          address2: res.data.address_street2,
          city: res.data.address_city,
          state: res.data.address_state,
          zip: res.data.address_zip
        });
      })
      .catch(err => console.log(err));
  },[globalState]);

  const handleClick = () => {
    if (globalState.state.userId === 'retailer') {
      history.push('/retailer');
    } else if (globalState.state.userId = 'consumer') {
      history.push('/');
    }
  };

  const seed = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@hotmail.com',
    phone: '6105555555',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19123'
  };

  return (
    <div className="container consumer">
      <h1>Consumer Portal</h1>
      <hr />
      <p>Name: {consumer.name}</p>
      <p>Email: {consumer.email}</p>
      <p>Phone: {consumer.phone}</p>
      <p>Address: {consumer.address1}, {consumer.address2}</p>
      <p>City: {consumer.city}</p>
      <p>State: {consumer.state}</p>
      <p>Zip: {consumer.name}</p>
      <Button onClick={handleClick}>To Portal</Button>
    </div>
  );
}
  
export default Consumer;