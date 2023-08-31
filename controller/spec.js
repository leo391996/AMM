

const assetModel = require('../models/spec');

module.exports = {
  specDetails: async (req, res) => {
    try {
      const { BrandName, Model, PurchasecostUSD, SerialNumber, YearofManufactured,
        LifeTime,TotalAvailableTime,Expectedutilization,Idealrunrate,
        TotalHoursworked,MaintenanceFrequency } = req.body;
      const image = req.file; // Access the image file from req.file object

      const result = new assetModel({
        BrandName: BrandName,
        Model: Model,
        PurchasecostUSD: PurchasecostUSD,
        SerialNumber: SerialNumber,
        YearofManufactured: YearofManufactured,
        LifeTime: LifeTime,
        TotalAvailableTime: TotalAvailableTime,
        Expectedutilization:Expectedutilization,
        Idealrunrate: Idealrunrate,
        TotalHoursworked: TotalHoursworked,
        MaintenanceFrequency: MaintenanceFrequency ,
        image: image.buffer, // Save the image data as a Buffer in MongoDB
      });

      await result.save();
      console.log(result.image);
      return res.status(201).json({ message: 'Spec details saved successfully', result });
    } catch (err) {
      res.status(400).json({
        err: err.message, // Return the error message
      });
    }
  },
};

