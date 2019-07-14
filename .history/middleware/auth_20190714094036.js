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

     //The decoded variable is the object created in the payload. Let's check it 
     /**
      *   const payload = {
    user: {
      id: user.id //
    }
  }
      */
     //So to get actuall user after verifification we will do decoded.user and this is the output
     /**
      * { user: { id: '5d2a862d1502ccf7dc7053fd' },
        iat: 1563067949,
        exp: 1563427949 }
      */

    //So next we will attach this user object to our request body as req.user and this user only contains and id from our database so we can search by id and return the user's details. we can get the id as req.user.id

     console.log('Decoded', decoded.user.id)
     req.user = decoded.user;
    // Any route that has a token has this user property attaach to the request body
     next()
   } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
   }
}