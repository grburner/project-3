import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CartDetail = (props) => {

    const handleChange = (e, type) => {
        props.onChange(e, props.data.name, type)
    }

    return(
        <Row>
            <Col xs={1}>
                <div onClick={(e) => handleChange(e, "remove")}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </Col>
            <Col xs={6}>{props.data.name}</Col>
            <Col xs={1}>${props.data.price}</Col>
            <Col xs={1}>
                <input 
                    className='d-inline' 
                    placeholder={props.data.order_units} 
                    data-id={props.key} value={props.value} 
                    onChange={(e) => handleChange(e, "change")}>
                </input>
            </Col>
        </Row>
    )
}

export default CartDetail;