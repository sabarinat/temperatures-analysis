const res = require("express/lib/response")
var executeQuery = require('../../database/databaseConnection');
var {generateToken} = require('../common/encryt');


const signup = async (addDatas) => {
    try{
        const userDetails = await userByEmail(addDatas.email);
        if(userDetails && userDetails.length) {
          throw new Error('User already exist')
        } else {
            const InserData = `INSERT INTO tbl_users(email, password) VALUES(?, ?)`;
            await executeQuery(InserData, [addDatas.email, addDatas.password]);
            return { message:"User added successfully"} ;
        }
        
    } catch(err) {
        throw new Error(err);

    }
             
}



const userByEmail = async (email) => {
    try {
       let listSql = " SELECT mobile_number FROM tbl_users WHERE email = ? AND is_deleted = 0 "
       let params = [email]
       return await executeQuery(listSql, params);
    } catch (e) {
        throw new Error(e)
    }
}

// login API
const login = async (email, password) => {
     try {
        const checkEmailQuery = `SELECT * FROM tbl_users WHERE email = ?  AND is_deleted = 0`;
        const cehckEmailParam = [email];
        const userDetails = await executeQuery(checkEmailQuery, cehckEmailParam);
        if(userDetails.length) {
            if(password === userDetails[0].password) {
                 let {password, ...userExracttDeatils} = userDetails[0];
                 const token = await generateToken(userExracttDeatils);
                 return {accessToken:token, message: "User Loggin successfully. "}
            } else {
                throw new Error('Enter correct password');
            }
        } else {
            throw new Error('Enter correct email');
        }

     } catch(err) {
        throw new Error(err);
     }
}



module.exports = {
    signup: signup,
    login: login
}