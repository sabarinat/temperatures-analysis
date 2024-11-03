const executeQuery = require('../../database/databaseConnection');
//var nodemailer = require('nodemailer');


const addTemperature = async (temperature) => {
    try {    
        const inserData = `INSERT INTO tbl_temperature(temperature) VALUES(?)`;
        const data = await executeQuery(inserData, [temperature]);
        return {data:[data], message:"Customer added successfully" } ;
    } catch(err) {
        throw new Error(err);
    }
}

const getTemperature = async() => {
    try {
       const [barChart, pieChart] = await Promise.all([getAllTemperature(), getTemperatureForGroup()])
       return {
        barChart: barChart,
        piechart: pieChart,
        doughnutChart: pieChart,
        lineChart:pieChart,
       } ;
    } catch(err) {
        throw new Error(err);
    }
}

async function getAllTemperature() {
    try {
        const dataSql = `SELECT temperature, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as date FROM tbl_temperature WHERE is_deleted = 0 `;
        const temperatureDetail = await executeQuery(dataSql, []);
        return chartFormatData(temperatureDetail); 
    } catch(err) {
        throw new Error(err);
    }
    
}
async function getTemperatureForGroup() {
   try {
     const datasQuery = `SELECT SUM(temperature)/count(DATE_FORMAT(created_at, '%Y-%m-%d')) AS temperature, DATE_FORMAT(created_at, '%Y-%m-%d') AS date FROM tbl_temperature WHERE is_deleted = 0 GROUP BY date`;
     const groupData = await executeQuery(datasQuery, []);
     return chartFormatData(groupData);
   } catch(err) {
     throw new Error(err);
   }
}

function chartFormatData(chartDatas) {
    let label = [];
    let value = [];
    for(let data of chartDatas) {
       label.push(data.date);
       value.push(parseFloat(data.temperature).toFixed(2))
    }
    return [label, value];
}


module.exports = {
    addTemperature: addTemperature,
    getTemperature: getTemperature
}