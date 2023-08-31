const UserModel = require('../models/schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



module.exports = {

    RegisterDetails: async (req, res) => {
        try {
            const { name, email, Password } = req.body;

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt);

            const result = new UserModel({
                name: name,
                email: email,
                Password: hashedPassword, // Store the hashed password in the database
            });

            await result.save();
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json({
                err: err
            });
        }
    },
    // ... rest of your controller code


    LoginDetails: async (req, res) => {
        try {
          const { email, Password } = req.body;
          const user = await UserModel.findOne({ email });
    
          if (!user) {
            return res.json({ message: 'Invalid credentials' });
          }
    
          const comparePassword = await bcrypt.compare(Password, user.Password);
    
          if (comparePassword) {
            const token = jwt.sign({ email: user.email }, 'credo_secret', {
              expiresIn: '1h'
            });
            //  console.log('Generated Token:', token); 
            // console.log()
            return res
              .status(200)
              .header('Authorization', 'Bearer ' + token)
              .json({ message: 'Successfully logged in', token,user  })
              // .json({ message: 'Successfully logged in', user })
       
          } else {
            return res.json({ message: 'Invalid credentials' });
          }
        } catch (err) {
          res.status(400).json({
            err: err
          });
        }
      },

            LoginDetailsget: async (req, res) => {
            try{
         
             const result = await UserModel.find();
             
         
         
             res.status(200).json(result);
             return res
         
            }catch(err){
             res.status(400).json({
                 err:err
              })
            }
         
         }
        
          

}

