const workorderModel = require('../models/popup');

module.exports = {

    workorderDetails: async (req, res) => {
        try {
            const { workordername, workordercode,description, noassetavailable,priority,plannedstartdate,targetdate,workordertype,nochecklisttemplateavailable,chooseengineer,estimatedworkhourse} = req.body;


            const result = new workorderModel({
                workordername: workordername,
                workordercode: workordercode,
                description:description,
                noassetavailable: noassetavailable,
                priority: priority,
                plannedstartdate:plannedstartdate,
                targetdate: targetdate,
                workordertype:workordertype,
                nochecklisttemplateavailable:nochecklisttemplateavailable,
                chooseengineer: chooseengineer,
                estimatedworkhourse:estimatedworkhourse
                
            });

            await result.save();
            // res.status(201).json(result);
            // return res.status(201).json({ message: 'Workorder details saved successfully', result });
            // console.log(result)
            // console.log(result.message)
            return res.status(200).json({ message: 'Workorder details saved successfully', result });

            // return res
            //   .status(200)
  
            //   .json({ message: 'Successfully logged in'})
       
        } catch (err) {
            res.status(400).json({
                err: err
            });
        }
    },

    workorderDetailsget: async (req, res) => {
        try{
     
         const result = await workorderModel.find();
         
     
     
         res.status(200).json(result);
         return res
     
        }catch(err){
         res.status(400).json({
             err:err
          })
        }
     
     },
          
     workorderDetailsupdate: async (req, res) => {
        const { id } = req.params;
      
        const updates = req.body;
 
      
        try {
          // console.log(id);
          // console.log(updates);
          const updatedWorkOrder = await workorderModel.findByIdAndUpdate(id, updates, { new: true });
          // console.log(updatedWorkOrder )
          if (updatedWorkOrder) {
            return res.status(200).json({ message: 'Workorder details updated successfully' });
          }
      
          return res.status(200).json(updatedWorkOrder);
        } catch (error) {
          return res.status(500).json({ error: 'Internal server error' });
        }


      },

    workorderDetailsdelete: async (req, res) => {
        // app.delete('/:id',async (req,res)=>{
          // const { id } = req.params;
          try{
        
            await workorderModel.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Workorder details deleted successfully"});
          }catch(err){
            res.status(400).json({
                err:err
            })
          }
        }

      }


