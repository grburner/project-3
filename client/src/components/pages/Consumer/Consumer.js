import React, {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import API from '../../../utils/API';
import { useHistory } from 'react-router-dom';
import { store } from '../../../utils/GlobalState';
import Button from '../../atoms/Button/Button';  
import DateFormatter from '../../../utils/DateFormatter';

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
  const [orders, setOrders] = useState([])
  const [outputOrders, setOutputOrders] = useState(false)

  let { id } = useParams();
  let tempArray = [];
  useEffect(()=>{
    // Global state is empty when you hit this page
    // console.log(globalState);
    // API.getUser(globalState.state.userId)
    API.getUser(id)
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
      
    API.getUserOrders(id)
    .then(res =>{
      console.log(res.data)
      for(let i = 0; i < res.data.length; i++){
        // console.log(res.data[i])
        let obj = {};
        // Look up retailer id
        API.getUserName(res.data[i].retailer_id)
        .then(res => {
          obj.name = res.data.company_name;
        })
        .catch(err => console.log(err));  
        obj.date = res.data[i].date;
        obj.shipped = res.data[i].shipped_on;
        obj.detail = res.data[i].detail;
        for(let b = 0; b < obj.detail.length; b++){
          // console.log(obj.detail[b].product_id)
          API.getProductsID(obj.detail[b].product_id)
          .then(res => {
            obj.detail[b].name = res.data.name
          })
          .catch(err => console.log(err));
        }
       tempArray.push(obj)
      }
      
      setTimeout(function(){ 
        setOrders(tempArray) 
        setOutputOrders(true)
      }, 1000);
    })
    .catch(err => console.log(err));
  },[]);

  const handleClick = () => {
    if (globalState.state.userId === 'retailer') {
      history.push('/retailer');
    } else if (globalState.state.userId = 'consumer') {
      history.push('/');
    }
  };

  // const seed = {
  //   firstName: 'John',
  //   lastName: 'Smith',
  //   email: 'jsmith@hotmail.com',
  //   phone: '6105555555',
  //   city: 'Philadelphia',
  //   state: 'PA',
  //   zip: '19123'
  // };

  return (
    <div className="container consumer">
      <h1>Consumer Portal</h1>
        <div className="consumer-info">
        <h3>Your Information</h3>
        <p>Name: {consumer.name}</p>
        <p>Email: {consumer.email}</p>
        <p>Phone: {consumer.phone}</p>
        <p>Address: {consumer.address1} {consumer.address2 ? `, ${consumer.address2}` : ''}</p>
        <p>City: {consumer.city}</p>
        <p>State: {consumer.state}</p>
        <p>Zip: {consumer.zip}</p>
      </div>
      <h3>Your Orders</h3>
      {outputOrders ? '' : <p>Loading orders...</p>}
      {outputOrders && orders.length < 1 ? <p>You have no orders yet.</p> : ''}
      {orders.map((x,i)=>{
        console.log(x)
        return (
          <div>
          <table className="orders-table">
            <tr className="order-table-header">
              <td colSpan="4">Order Date: {DateFormatter(x.date)} / Retailer: {x.name}</td>
            </tr>
            <tr>
              <td className="order-table-fields">Product Name</td>
              <td className="order-table-fields">Price</td>
              <td className="order-table-fields">Quantity</td>
              <td className="order-table-fields">Shipment Status</td>
            </tr>
            {x.detail.map((x,i)=>{
              return (
                <tr>
                  <td width="25%">{x.name}</td>
                  <td width="25%">{x.price}</td>
                  <td width="25%">{x.quantity}</td>
                  <td width="25%">{x.shipped === undefined ? "Not Shipped" : x.shipped}</td>
                </tr>
              )
            })}
          </table>
          </div>
        )
      })}

    </div>
  );
}
  
export default Consumer;