const { model } = require('mongoose');

const  HoldingsSchema  = require('../Schema/HoldingsSchema.js');

const HoldingsModel = model('holding', HoldingsSchema);

module.exports = HoldingsModel;