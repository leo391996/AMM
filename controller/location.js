const LocationModel = require('../models/location');

module.exports = {

    locationDetails: async (req, res) => {
        try {
            const { Latitude, Longitude} = req.body;
            const result = new LocationModel({
                Latitude: Latitude,
                Longitude: Longitude,   
            });

            await result.save();
            // res.status(201).json(result);
            // return res.status(201).json({ message: 'Workorder details saved successfully', result });
            return res.status(201).json({ message: 'location details saved successfully', result });

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