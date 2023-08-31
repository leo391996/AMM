const mroModel = require('../models/mro');

module.exports = {

    mroDetails: async (req, res) => {
        try {
            const { NoAssetAvailable, NoCustomerAvailable, MaintenanceType,TargetDate,Description} = req.body;

            const result = new mroModel({
                NoAssetAvailable: NoAssetAvailable,
                NoCustomerAvailable: NoCustomerAvailable,
                MaintenanceType: MaintenanceType,
                TargetDate:TargetDate,
                Description: Description,
                
            });

            await result.save();
            // res.status(201).json(result);
            // return res.status(201).json({ message: 'Workorder details saved successfully', result });
            return res.status(201).json({ message: 'Workorder details saved successfully', result });

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