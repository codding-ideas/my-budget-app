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

     
     console.log('Decoded', decoded.user.id)
     req.user = decoded.user;
    // Any route that has a token has this user property attaach to the request body
     next()
   } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
   }
}