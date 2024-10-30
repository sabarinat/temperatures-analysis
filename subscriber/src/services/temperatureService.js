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
       const dataSql = `SELECT temperature, created_at as date FROM tbl_temperature WHERE is_deleted = 0 `;
       const temperatureDetail = await executeQuery(dataSql, []);
       let label = [];
       let values = [];
       for(let data of temperatureDetail) {
        label.push(data.date);
        values.push(data.temperature);
       } 
       return {
        barChart: [label, values],
        piechart: [label, values],
        doughnutChart: [label, values],
        lineChart:[label, values],
       } ;
    } catch(err) {
        throw new Error(err);
    }
}


module.exports = {
    addTemperature: addTemperature,
    getTemperature: getTemperature
}