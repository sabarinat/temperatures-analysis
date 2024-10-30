var jwt = require('jsonwebtoken');
var CONSTANT = require('./constant');


const generateToken = async (data) => {
   try {
       return await jwt.sign({data},CONSTANT.JWT_SECRET_TOKEN, {expiresIn: CONSTANT.TOKEN_TIME_LIMIT});
   } catch(e) {
       throw new Error(e);
   }
}

const verifyToken = async (token) => {
    try {
        token = token.replace('/^Bearrer\s/', "");
        let data = {} ;
        await jwt.verify(token,CONSTANT.JWT_SECRET_TOKEN, (err, decodedToken) => {
              if(err) {
                  data = {err: err};
              } else {
                  data =  {data: decodedToken.data};
              }
        } ) ;
        return data;
    } catch(e) {
        throw new Error(e);
    }
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken,
}