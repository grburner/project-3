import React, { useState, useEffect, useContext } from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import './style.css'
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';

export default function CheckoutForm(props) {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const globalState = useContext(store);
    const { dispatch } = globalState;

    useEffect(() => {
      console.log('into use effect Stripe')
      let body = ({amount: props.amount})
      API.createPaymentIntent(body)
        .then(data => {
          setClientSecret(data.data.clientSecret);
        });
    }, []);

      const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

      const resetCart = () => {
        dispatch({ type: 'SETuserCart', payload: '' })
        API.updateCart(globalState.state.userId, [])
      }

      const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
      };
      const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        });
        if (payload.error) {
          setError(`Payment failed ${payload.error.message}`);
          setProcessing(false);
        } else {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
          resetCart()
          paymentViewChange()
        }
      };

    const paymentViewChange = () => {
      props.toggleView()
    }

    return (
    <form id="payment-form" onSubmit={handleSubmit}>
    <div id="stripe-input">
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
    </div>
      <button
        disabled={processing || disabled || succeeded}
        id="stripe-submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    </form>
    )
}