var users = require('../services/userService');

const signup = async (req, res) => {
  try {
     const resp = await users.signup(req.body);
    //   common.response(res, resp.data, resp.message, resp.status, resp.statusCode)
    res.status(200).json({message: 'user added successfully'})
  } catch(err) {
    res.status(500).json({message: err});
  }

}

const generateOtpForSignUp = async (req, res) => {

    const resp = await users.generateOtpForSignUp(req.body.mobileNumber);
    //common.response(res, resp.data, resp.message, resp.status, resp.statusCode)

}

const generateOtpForLogin = async (req, res) => {

    const resp = await users.generateOtpForLogin(req.body.mobileNumber);
    //common.response(res, resp.data, resp.message, resp.status, resp.statusCode)

}

const validateOtp = async (req, res) => {

    const resp = await users.validateOtp(req.body.mobileNumber,req.body.otp);
   // await common.response(res, resp.data, resp.message, resp.status, resp.statusCode);

}

const addUserDetails = async (req, res) => {

    const resp = await users.addUserDetails(req.body.gender, req.body.age, req.body.weight, 
                                            req.body.heightInFeet, req.body.heightInInches,
                                            req.body.dietPreference, req.body.goal, 
                                            req.body.foodAllergies, req.userDetails.id
                                            );
    //await common.response(res, resp.data, resp.message, resp.status, resp.statusCode);

}
const verifyMail = async (req, res) => {

    const resp = await users.verifyMail(req.body.email, req.body.slot, req.body.id);

    //await common.response(res, resp.data, resp.message, resp.status,  resp.statusCode)

}

const cancelMeals = async (req, res) => {

    const resp = await users.cancelMeals(req.body.userId, req.body.cancelDate, req.body.breakFast, req.body.lunch, req.body.dinner);

    //await common.response(res, resp.data, resp.message, resp.status, resp.statusCode);

}

const login = async (req, res) => {
    try {
      data = await users.login(req.body.email, req.body.password);
      res.status(200).json({data: data});
   } catch(err) { 
    // await common.response(res, err, CONSTANT.INTERNAL_SERVER_ERROR, CONSTANT.INTERNAL_SERVER_ERROR, CONSTANT.INTE_SERVER_CODE);
    res.status(500).json({err: err.message || err});
   }
 }

const userCreate = async (req, res) => {
    try{
        const resp = await users.signup(req.body);
        res.status(200).json({data: resp})
       } catch(err) {
         res.status(500).json({message: error.message || err});
       }
}

module.exports = {

    signup: signup,
    generateOtpForSignUp: generateOtpForSignUp,
    generateOtpForLogin: generateOtpForLogin,
    validateOtp: validateOtp,
    adddUserDetails: addUserDetails,
    verifyMail: verifyMail,
    cancelMeals: cancelMeals,
    login: login,
    userCreate: userCreate

}