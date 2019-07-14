const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function(req, res, next){
//Extract token from the header
const token = req.header('x-auth-token');

if(!token){
 return res.status(401).json({})
}

}