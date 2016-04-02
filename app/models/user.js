var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
});

module.exports = User;


/*
encryption function-('pw', (null)salt, function(err,hash){
	hash is pw+salt
})
null-brcypt generates salt

compare(pw,hash, function(err,res){
	res=true
})compare hashed pw to hash