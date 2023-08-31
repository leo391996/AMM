// const mroModel = require('../models/asset');

// module.exports = {

//     mroDetails: async (req, res) => {
//         try {
//             const { AssetCode, AssetName, Category,NoPlantAvailable,PlannedProductionTime,image} = req.body;

//             const result = new mroModel({
//                 AssetCode: AssetCode,
//                 AssetName: AssetName,
//                 Category: Category,
//                 NoPlantAvailable:NoPlantAvailable,
//                 PlannedProductionTime: PlannedProductionTime,
//                 image:image
                
//             });

//             await result.save();

//             return res.status(201).json({ message: 'Workorder details saved successfully', result });

//         } catch (err) {
//             res.status(400).json({
//                 err: err
//             });
//         }
//     },       
// }




const assetModel = require('../models/asset');

module.exports = {
  assetDetails: async (req, res) => {
    try {
      const { AssetCode, AssetName, Category, NoPlantAvailable, PlannedProductionTime } = req.body;
      const image = req.file; // Access the image file from req.file object

      const result = new assetModel({
        AssetCode: AssetCode,
        AssetName: AssetName,
        Category: Category,
        NoPlantAvailable: NoPlantAvailable,
        PlannedProductionTime: PlannedProductionTime,
        image: image.buffer, // Save the image data as a Buffer in MongoDB
      });

      await result.save();
      console.log(result.image);
      return res.status(201).json({ message: 'Asset details saved successfully', result });
    } catch (err) {
      res.status(400).json({
        err: err.message, // Return the error message
      });
    }
  },


  assetDetailsget: async (req, res) => {
    try{
 
     const result = await assetModel.find();
     
 
 
     res.status(200).json(result);
     return res
 
    }catch(err){
     res.status(400).json({
         err:err
      })
    }
 
 }
};


