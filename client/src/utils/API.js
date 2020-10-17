import axios from "axios";


export default {
    getProducts: function(){
        return axios.get('/api/products');
    },
    getProductsID: function(id){
        return axios.get('/api/products/' + id);
    },
    getProductsByName: function(name){
        return axios.get('/api/products/name/' + name);
    },
    createProduct: function(prod){
        return axios.post('/', prod)
    }
}