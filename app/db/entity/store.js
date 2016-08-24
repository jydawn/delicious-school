/**
 * Created by xjy on 8/24/16.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  storeName: String,
  storeLocation: String,
  storePhone: String,
  storeStatus: String,

});

// the collection's name is `orders`
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
