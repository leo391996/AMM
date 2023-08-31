const preventivemaintenanceModel = require('../models/pmschema');

module.exports = {

    pmDetails: async (req, res) => {
        try {
            const { Assets, WorkorderName, EnterWorkorderDescription,ChoosePriority,AssignedTo,StartDate,EndDate,Yearly,Every,NoChecklistAvailable} = req.body;


            const result = new preventivemaintenanceModel({
                Assets: Assets,
                WorkorderName: WorkorderName,
                EnterWorkorderDescription: EnterWorkorderDescription,
                ChoosePriority: ChoosePriority,
                AssignedTo: AssignedTo,
                StartDate: StartDate,
                EndDate:EndDate,
                Yearly:Yearly,
                Every:Every,
                NoChecklistAvailable:NoChecklistAvailable,

                
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