import React from 'react';
import './style.css';

function Consumer(){

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
      <p>First Name: {seed.firstName}</p>
      <p>Last Name: {seed.lastName}</p>
      <p>Email: {seed.email}</p>
      <p>Phone: {seed.phone}</p>
      <p>City: {seed.city}</p>
      <p>State: {seed.state}</p>
      <p>Zip: {seed.zip}</p>
    </div>
  );
}
  
export default Consumer;