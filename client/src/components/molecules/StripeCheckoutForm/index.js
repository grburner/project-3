import React, { useState, useEffect, useContext } from 'react';

// UTILS
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';
import './style.css';

// STRIPE
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';


export default function CheckoutForm(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  // Get client secret (Stripe) on load
  useEffect(() => {
    let body = ({amount: props.amount});
    API.createPaymentIntent(body)
      .then(data => {
        setClientSecret(data.data.clientSecret);
      });
  }, []);

  // Inline styling for Stipe
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  // Reset cart after successful payment
  const resetCart = () => {
    dispatch({ type: 'SETuserCart', payload: [] });
    API.updateCart(globalState.state.userId, []);
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  // Send payment to Stripe on submit & render success/failure messages
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
      resetCart();
      paymentViewChange();
    }
  };

  // Show / hide component
  const paymentViewChange = () => {
    props.toggleView();
  };

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
            'Pay'
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}