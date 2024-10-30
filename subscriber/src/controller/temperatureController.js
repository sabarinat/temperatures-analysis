const temperatureService = require('../services/temperatureService')

const getTemperature = async (req, res) => {
    try{
        const resp = await temperatureService.getTemperature(req.body);
        res.status(200).json({data: resp})
       } catch(err) {
         res.status(500).json({message: err.message || err});
       }
}

module.exports = {
    getTemperature: getTemperature
}