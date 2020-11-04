import React, { useState, useContext, useEffect } from 'react';
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';
import CartDetail from '../../molecules/CartDetail/index';
import Modal from 'react-bootstrap/Modal'
import Button from '../../atoms/Button/Button';

const CartToast = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    let userId = '5f90df97d56aef06bcb010cb';

    const [cartData, setCartData] = useState()

    useEffect(() => {
        let promises = [];

        globalState.state.userCart.forEach(elem => {
            promises.push(
                API.getProductsID(elem.product_id)
                .then(
                    data => { return {
                    "name": data.data.name,
                    "price": data.data.price,
                    "retailer_id": data.data.retailer_id,
                    "units": data.data.units,
                    "order_units": 1,
                    "product_id": data.data._id
                }})
            )
        });
        Promise.all(promises).then((values) => {setCartData(values)})
    }, [globalState]);

    const handleChange = (e, name) => {
        const value = e.target.value;
        cartData.forEach((elem, index) => {
            if (name === elem.name) {
            changeState('order_units', name , value);
            }
        });
    };

    const changeState = (field, name, value) => {
        const newData = cartData.map((d, i) => {
          if (name === d.name) {
            d[field] = value;
          }
          return d;
        });
        setCartData(newData);
      };

    const createOrder = () => {
        let orders = []
        let uniqueRetailers = []
        cartData.forEach(elem => {
            if (uniqueRetailers.indexOf(elem.retailer_id) === -1) {
                uniqueRetailers.push(elem.retailer_id)
            }
        })
        uniqueRetailers.forEach(elem => {
            orders.push({
                'retailer_id' : elem,
                // 'user_id': globalState.state.userId,
                'user_id': userId,
                'date': new Date(),
                'status': 'open',
                'detail': []
            })
        })
        cartData.forEach(elem => {
            console.log(elem)
            let index = 0
            let id = elem.retailer_id
            orders.forEach(order => {
                if (id === order.retailer_id) {
                    orders[index].detail.push({
                        'product_id': elem.product_id,
                        'quantity': elem.order_units,
                        'price': elem.price
                    })
                    index += 1
                } else {
                    index += 1
                }
            })
        })
    sendOrders(orders)
    }

    const sendOrders = (orders) => {
        orders.forEach(order => {
            API.createNewOrder(order)
        })
    }

    return(
        <Modal 
            show={globalState.state.toastState}
            onHide={() => {dispatch({type: "TOGGLEtoastHIDE"})}}
            size="lg"
        >
            <Modal.Header  closeButton>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Cart</strong>
            </Modal.Header>
            <Modal.Body>
                <div>{'test'}</div>
                    {cartData ? cartData.map((elem, index) => (
                        <CartDetail key={index} data={elem} onChange={handleChange}></CartDetail>
                    )): ''}
            </Modal.Body>
            <Button onClick={() => createOrder()}>Checkout</Button>
        </Modal>
    )
}

export default CartToast;