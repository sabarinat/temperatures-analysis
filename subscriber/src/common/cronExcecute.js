var nodecron = require('node-cron');
var executeQuery = require('../../database/databaseConnection');
var commonFunc = require('./common');
var moment = require('moment');
var CONSTANT = require('./constant');

module.exports = async () => {
    
//      let cronFour = "30 6 * * *";
//      let cronSeven = "30 7 * * *";
//      let cronTen = "30 10 * * *";
//      let cronThreePM = "30 15 * * *";
//      let cronSixPM = "30 18 * * *"
//      let updatesCount = "0 0 1 * *";
//     let crons = nodecron.schedule(cronFour, () => {
//          console.log(moment().utcOffset("+05:30"));
//          let endDate = moment().utcOffset("+05:30").format("YYYY-MM-DD 04:00");
//          let startDate   = moment().utcOffset("+05:30"). subtract(1, "days").format("YYYY-MM-DD 18:31");
//         getDatas(startDate, endDate);
//     },{
//         scheduled: true,
//         timezone: "Asia/Kolkata"
//       });
//     crons.start();
//     let cronAfter = nodecron.schedule(cronSeven, () => {
//         let startDate = moment().utcOffset("+05:30").format("YYYY-MM-DD 04:01");
//         let endDate   = moment().utcOffset("+05:30").format("YYYY-MM-DD 07:30");
//        getDatas(startDate, endDate);
//    },{
//     scheduled: true,
//     timezone: "Asia/Kolkata"
//   });
//    cronAfter.start();

//    let cronTens = nodecron.schedule(cronTen, () => {
//     let startDate = moment().utcOffset("+05:30").format("YYYY-MM-DD 07:31");
//     let endDate   = moment().utcOffset("+05:30").format("YYYY-MM-DD 10:30");
//     getDatas(startDate, endDate);
//     },{
//         scheduled: true,
//         timezone: "Asia/Kolkata"
//       });
//     cronTens.start();

//     let cronThree = nodecron.schedule(cronThreePM, () => {
//         let startDate = moment().utcOffset("+05:30").format("YYYY-MM-DD 10:31");
//         let endDate   = moment().utcOffset("+05:30").format("YYYY-MM-DD 03:30");
//         getDatas(startDate, endDate);
//     },{
//         scheduled: true,
//         timezone: "Asia/Kolkata"
//       });
//     cronThree.start();

//     let cronSix = nodecron.schedule(cronSixPM, () => {
//         let startDate = moment().utcOffset("+05:30").format("YYYY-MM-DD 03:31");
//         let endDate   = moment().utcOffset("+05:30").format("YYYY-MM-DD 06:30");
//         getDatas(startDate, endDate);
//     },{
//         scheduled: true,
//         timezone: "Asia/Kolkata"
//       });
//     cronSix.start();

//     let udateCount = nodecron.schedule(updatesCount, () => {
        
//         updateCount();
//         },{
//             scheduled: true,
//             timezone: "Asia/Kolkata"
//           });
//         udateCount.start();



//     async function getDatas(startDate, endDate) {
       
//         try {
//             let sql = `SELECT u.subscriber_name, u.subscriber_email,u.mobile_number, c.break_fast,
//                         c.lunch, c.dinner, c.cancel_date, DATE_FORMAT(CONVERT_TZ(c.createdAt,'+00:00','+05:00'), '%Y-%m-%d %H:%i') AS cancelProcessTime FROM cancel_tbl c
//                        INNER JOIN users u ON c.user_id = u.id WHERE DATE_FORMAT(CONVERT_TZ(c.createdAt,'+00:00','+05:00'), '%Y-%m-%d %H:%i') >= ?
//                         AND DATE_FORMAT(CONVERT_TZ(c.createdAt,'+00:00','+05:00'), '%Y-%m-%d %H:%i') <= ?`;
//             let params = [startDate, endDate];
//             let result  = await executeQuery(sql, params);
//             console.log(result);
//             if(result.length) {
//                let keys = Object.keys(result[0]);
//                let headers = []
//                keys.map(ele => {
//                    let data = {};
//                    data.header = ele;
//                    data.key = ele;
//                    headers.push(data);
//                });
//                var buffer = await commonFunc.generateExcel(headers, result);
//                 var mailOptions = {
//                         from: "sithik651@gmail.com",
//                         to: ['sithik651@gmail.com'],
//                         subject: 'Cancel Meals list',
//                         html: 'content',
//                         attachments: [
//                             {
//                                 filename: 'sabari.xlsx',
//                                 content: buffer,
//                                 contentType:
//                                     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//                             },
//                         ],
//                 };
            
//             let mail = await commonFunc.sendMail(mailOptions);
            
//             } else {
//                 var mailOptions = {
//                     from: "sithik651@gmail.com",
//                     to: ['sithik651@gmail.com'],
//                     subject: 'Cancel Meals list',
//                     html: 'No one cancel the meals',
                    
//             };
//             }
//         } catch(e) {
//             console.log(e)
//         }

//     }

//     async function updateCount() {
//         try {

//             let updateCountSql = "UPDATE web_users SET cancel_count = ? ";
//             let updateCountParam = [CONSTANT.UPDATE_COUNT];
//             var updates = await executeQuery(updateCountSql, updateCountParam);

//         } catch(e) {
//             console.log(e);
//         }
//     }

}