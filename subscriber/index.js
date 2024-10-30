var express = require('express');
var app = express();
var router = require('./router/router');
var bodyParser = require('body-parser');
var cors = require('cors');
require('./src/common/cronExcecute')();
const dotenv = require('dotenv')
require('./src/common/migration')();
const conf = require('nconf');
require('./src/mqtt-service/mqtt-service');

conf.argv();
const envs = conf.get('ENVS')
//const envs = "${envs}"
console.log('---------jhh========',`${envs ? `.${envs}` : ''}.env`);
dotenv.config({path: `.docker.env`});
console.log(process.env)
console.log("---------------------",envs)
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// app.use(authenticate);
app.use('/api',router);
app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    
    console.log(`Your server listen with ${process.env.PORT}`);
});

// boot(app, __dirname, function (err) {
//     if (err) throw err;
  
//     // start the server if `$ node server.js`
      

  
//   });