var mysql = require('mysql');
require('dotenv').config();


var connection = mysql.createPool({
    host            : "host.docker.internal",
    // host : process.env.HOST || 'db',
    port            : process.env.DATA_BASE_PORT,
    database        : 'temperature_analysis',
    user            : process.env.USER_NAME,
    password        : process.env.PASSWORD,
    multipleStatements : true
})

executeQuery = (sqlQuery, params) => {
    return new Promise((resolve, reject) => {   
           connection.query(sqlQuery, params, function(err, result){
               if(err) {
                   reject(err)
               } else {
                   resolve(result);
               }
           })
    })
}
module.exports = executeQuery