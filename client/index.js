var express = require('express');
var app = express();
require('./src/mqtt-service/mqtt-service');

app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    
    console.log(`Your server listen with ${process.env.PORT}`);
});

// boot(app, __dirname, function (err) {
//     if (err) throw err;
  
//     // start the server if `$ node server.js`
      

  
//   });