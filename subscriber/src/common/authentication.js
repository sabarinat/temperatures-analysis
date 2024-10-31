
var {verifyToken} = require('./encryt')

var authenticate = async (req, res, next) => {
    if(req.headers.authorization) {

        let data = await verifyToken(req.headers.authorization);
        if(data.data) {

        req.userDetails = data.data;
        next();

        } else {

        res.status(401).json({message: 'you have no access'});

        }

    } else {
        res.status(401).json({message: 'you have no access'});
    }
}

module.exports = {
    authenticate: authenticate
};