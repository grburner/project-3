import React, {useState, useContext, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';

// UTILS
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';
import './style.css';
import DateFormatter from '../../../utils/DateFormatter';
import Editable from '../../../utils/Editable';

// COMPONENTS
import CartToast from '../../organisms/CartToast';

function Consumer(){
  let history = useHistory();
  const globalState = useContext(store);
  const [inputData, setInputData] = useState('');
  const inputRef = useRef();
  const [consumer, setConsumer] = useState({
    name: '',
    username: '',
    phone_number: '',
    address_street1: '',
    address_street2: '',
    address_city: '',
    address_state: '',
    address_zip: ''
  });
  const [orders, setOrders] = useState([])
  const [outputOrders, setOutputOrders] = useState(false)
  const [orderMessage, setOrderMessage] = useState(true)

  let id = globalState.state.userId;
  let tempArray = [];
  useEffect(()=>{
    API.getUser(id)
      .then(res => {
        console.log('FIND USER BY ID');
        console.log(res);
        setConsumer({
          name: res.data.name,
          username: res.data.username,
          phone_number: res.data.phone_number,
          address_street1: res.data.address_street1,
          address_street2: res.data.address_street2,
          address_city: res.data.address_city,
          address_state: res.data.address_state,
          address_zip: res.data.address_zip
        });
      })
      .catch(err => console.log(err));
      
    API.getUserOrders(id)
    .then(res =>{
      console.log(res.data)
      for(let i = 0; i < res.data.length; i++){
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
          API.getProductsID(obj.detail[b].product_id)
          .then(res => {
            obj.detail[b].name = res.data.name
          })
          .catch(err => console.log(err));
        }
       tempArray.push(obj)
      }
      let count = 0;
      setTimeout(function(){ 
        setOrders(tempArray) 
        setOutputOrders(true)
        setOrderMessage(false)
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

  const changeInput = (field, e) => {
    const value = e.target.value
    setConsumer({
      ...consumer,
      [field]: value
    })
    sendData()
  }

  const sendData = () => {
    API.updateUser(id, consumer)
  }

  return (
    <div className="container consumer">
      <h1>Consumer Portal</h1>
      <CartToast />
        <div className="consumer-info">
        <h3>Your Information <span className='info-note'>* click field to edit</span></h3>
        <p><span className='info-label'>Name: </span>
        <Editable
            text={inputData}
            placeholder={consumer.name ? consumer.name : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.name} 
              type='text'
              placeholder={consumer.name}
              value={consumer.name}
              onChange={e => changeInput('name', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>Email:</span>
        <Editable
            text={inputData}
            placeholder={consumer.username ? consumer.username : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.username}
              type='text'
              placeholder={consumer.username}
              value={consumer.username}
              onChange={e => changeInput('username', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>Phone:</span>
        <Editable
            text={inputData}
            placeholder={consumer.phone_number ? consumer.phone_number : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.phone_number}
              type='text'
              placeholder={consumer.phone_number}
              value={consumer.phone_number}
              onChange={e => changeInput('phone_number', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>Address 1:</span> 
        <Editable
            text={inputData}
            placeholder={consumer.address_street1 ? consumer.address_street1 : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.address_street1}
              type='text'
              placeholder={consumer.address_street1}
              value={consumer.address_street1}
              onChange={e => changeInput('address_street1', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>Address 2:</span>
        <Editable
            text={inputData}
            placeholder={consumer.address_street2 ? consumer.address_street2 : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.address_street2}
              type='text'
              placeholder={consumer.address_street2}
              value={consumer.address_street2}
              onChange={e => changeInput('address_street2', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>City:</span> 
        <Editable
            text={inputData}
            placeholder={consumer.address_city ? consumer.address_city : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.address_city}
              type='text'
              placeholder={consumer.address_city}
              value={consumer.address_city}
              onChange={e => changeInput('address_city', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>State:</span>
        <Editable
            text={inputData}
            placeholder={consumer.address_state ? consumer.address_state_state : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.address_state}
              type='text'
              placeholder={consumer.address_state}
              value={consumer.address_state}
              onChange={e => changeInput('address_state', e)}
            />
          </Editable>
        </p>
        <p><span className='info-label'>Zip:</span>
        <Editable
            text={inputData}
            placeholder={consumer.address_zip ? consumer.address_zip : 'nothing here! please add your info'}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={consumer.address_zip}
              type='text'
              placeholder={consumer.address_zip}
              value={consumer.address_zip}
              onChange={e => changeInput('address_zip', e)}
            />
          </Editable>
        </p>
      </div>
      <h3>Your Orders</h3>
      {orderMessage ? <div>Loading Orders...<br /><img src='https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' /></div> : ''}
      {outputOrders && orders.length < 1 ? <p>You have no orders yet.</p> : ''}
      {orders.map((x,i)=>{
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
