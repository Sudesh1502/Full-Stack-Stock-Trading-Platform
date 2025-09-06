const { model } = require('mongoose');

const  PositionsSchema  = require('../Schema/PositionsSchema.js');

const HoldingsModel =  model('position', PositionsSchema);

module.exports = HoldingsModel;