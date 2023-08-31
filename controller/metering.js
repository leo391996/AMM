const meteringModel = require('../models/metering');

module.exports = {

    meteringDetails: async (req, res) => {
        try {
            const { metering} = req.body;
            const result = new meteringModel({
                metering: metering,
  
            });

            await result.save();
            // res.status(201).json(result);
            // return res.status(201).json({ message: 'Workorder details saved successfully', result });
            return res.status(201).json({ message: 'metering details saved successfully', result });

            // return res
            //   .status(200)
  
            //   .json({ message: 'Successfully logged in'})
       
        } catch (err) {
            res.status(400).json({
                err: err
            });
        }
    },       
}