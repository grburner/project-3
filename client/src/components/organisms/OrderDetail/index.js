import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';

const OrderDetail = (props) => {
  const { data } = props;
  const [custName, setCustName] = useState('');
  const [prodNames, setProdNames] = useState([]);

  useEffect(() => {
    API.getUserName(data.custId)
      .then(data => setCustName(data.data.name));
  }, [custName, prodNames]);
  // this is a hackjob and needs fixed

  useEffect(() => {
    let prodsArray = [];
    data.products.forEach((elem) => {
      API.getProductsID(elem.name)
        .then(data => prodsArray.push(data.data.name));
    });
    setProdNames(prodsArray);
  }, []);

  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td>{prodNames[index] ? prodNames[index] : 'no data'}</td>
        <td>{element.quantity}</td>
        <td>{element.cost}</td>
      </tr>
    );
  };
  return (
    <div>
      <div>{custName ? custName : ''}</div>
      <div>{data.orderDate}</div>
      <div>{data.stats}</div>
      <Table>
        <tbody>
          {data.products.map(renderProductRow)}
        </tbody>
      </Table>
    </div>

  );
};

export default OrderDetail;