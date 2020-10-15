import React from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Marketplace(){

  const seed = [
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Pinot Grigio',
      price: '$10',
      link: '/product/Pinot-Grigio'
    },
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Chardonnay',
      price: '$15',
      link: '/product/Chardonnay'
    },
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Pinot Noir',
      price: '$20',
      link: '/product/Pinot-Noir'
    },
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Grape Tornado',
      price: '$25',
      link: '/product/Grape-Tornado'
    },
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Arctic Ice',
      price: '$30',
      link: '/product/Arctic-Ice'
    },
    {
      image: 'https://static.vinepair.com/wp-content/uploads/2018/11/Wine27.png',
      title: 'Bubblegum Blast',
      price: '$33',
      link: '/product/Bubblegum-Blast'
    },
  ];

  return (
    <div className="container marketplace">
      <h3>Marketplace</h3>
      <Row>
        {seed.map((x,i)=>{
          return (
            <Col lg={3} md={6} sm={12}>
              <Item value={x}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );

}
  
export default Marketplace;