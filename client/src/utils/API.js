import axios from 'axios';


export default {
  getProducts: function(){
    return axios.get('/api/products/');
  },
  getProductsID: function(id){
    return axios.get('/api/products/' + id);
  },
  getProductsByName: function(name){
    return axios.get('/api/products/name/' + name);
  },
  createProduct: function(prod){
    return axios.post('/api/products/', prod);
  },
  createUser: function(user) {
    return axios.post('/api/users/', user);
  },
  getUser: function(user) {
    return axios.get('/api/users/' + user);
  },
  getUserLogin: function(user) {
    return axios.post('/api/users/login', user);
  },
  getProductsByRetailerId: function(id) {
    return axios.get('/api/products/retailer_id/' + id);
  },
  updateProducts: function(id, body) {
    return axios({
      method: 'patch',
      url: ('api/products/' + id),
      data: body
    });
  },
  findByRetailerId: function(id) {
    return axios.get('/api/orders/retailer_id/' + id);
  },
  getUserName: function(id) {
    return axios.get('/api/users/' + id);
  },
  findRetailerById: function(id) {
    return axios.get('/api/users/' + id);
  },
  updateCart: function(userId, body) {
    return axios({
      method: 'patch',
      url: ('/api/users/cart/' + userId),
      data: body
    });
  },
  getUserByName: function(name) {
    return axios.get('/api/users/name/' + name);
  },
  getUserOrders: function(id) {
    return axios.get('/api/orders/user_id/' + id);
  },
  logout: function(){
    return axios.get('/logout');
  },
  createNewOrder: function(order) {
    return axios({
      method: 'post',
      url: ('/api/orders/'),
      data: order
    });
  },
  updateOrder: function(id, body) {
    return axios({
      method: 'patch',
      url: ('/api/orders/' + id),
      data: body
    });
  },
  createPaymentIntent: function(body) {
    return axios({
      method: 'post',
      url: ('/api/external'),
      json: true,
      data: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  updateUser: function(id, body) {
    return axios({
      method: 'patch',
      url: ('/api/users/' + id),
      data: body
    });
  },
};