const { model } = require('mongoose');

const  UserSchema  = require('../Schema/UserSchema.js');

const UserModel = model('user', UserSchema);

module.exports = UserModel;