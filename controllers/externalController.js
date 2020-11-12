const axios = require('axios');
const stripe = require('stripe')('sk_test_51HlK4mEvE5s7arjuHzo5mKUWRVpYdlLhlQIXHePSgIeRzoMLvovefTvZ1ucdQgqdCO2krft0IrwZLe1PUzkGXC3F00M2XKxKwA');

module.exports = {
  getTest: function(req, res) {
    const queryString = encodeURI('https://www.googleapis.com/books/v1/volumes?q=potter&key=AIzaSyA8sX6HxJ81KQ1pUufSXWnzBzX46iVqxqA');
    console.log(queryString);
    axios.get(queryString)
      .then(data => {
        res.send(data.data);
      });
  },
  createPaymentIntent: async function(req, res) {
    console.log(req.body.amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(req.body.amount*100),
      currency: 'usd'
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });
  }
};