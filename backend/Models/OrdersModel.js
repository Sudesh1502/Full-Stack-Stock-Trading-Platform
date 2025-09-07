const { model } = require('mongoose');

const  OrdersSchema  = require('../Schema/OrdersSchema.js');

const OrdersModel =  model('order', OrdersSchema);

module.exports = OrdersModel;