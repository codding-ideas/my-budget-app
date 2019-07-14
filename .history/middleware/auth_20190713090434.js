const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function(req, res, next){
//Extract token from the header
const token = req.header('x-auth-token');

   if(!token){
    return res.status(401).json({message: 'No token, authorisation denied'})
   }
   
   try {
     const decoded = jwt.verify(token, config.get('jwtSecret'));
     
     //The decoded variable is an object which contains the actual data in our payload
     //Next we want to assign this user object to the request body because the request is also an object
     //console.log('Auth Method', decoded)
  
     req.user = decoded.user;
  
     next()
   } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
   }
}