import React, {useState, useEffect} from 'react';
import './style.css';

import Button from '../../atoms/Button/Button.js'

function customButton({onClick}){
    const [cartState, setCartState] = useState(false)
    
    window.onscroll = function(){
        var top  = window.pageYOffset || document.documentElement.scrollTop
        console.log(top);
        if(top > 400){
            setCartState(true)
        } else {
            setCartState(false)
        }
    };

    return(
        <div className={cartState ? "floating-cart" : "cart"} id="cart-button">
            <Button variant="white" onClick={onClick}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Button>
        </div>
    )
}

export default customButton;