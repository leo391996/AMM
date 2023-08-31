const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const userRoute = require('./route/user');
const popupRoute = require('./route/popup');
const pmRoute = require('./route/pm');
const mroRoute = require('./route/mro');
const assetRoute = require('./route/asset');
const specRoute = require('./route/spec');
const locationRoute = require('./route/location');
const meteringRoute = require('./route/metering');

const cors = require('cors');

app.use(parser.json());
app.use(express.json());
app.use(cors());


app.use((req,res,next)=>{
    console.log("app.js file",__dirname);
    next();
})

app.use('',express.static(path.join(__dirname,'ems')));
// app.use('',express.static(path.join(__dirname,'./src/app')));
app.use('/api/user',userRoute);
app.use('/api/user',popupRoute);
app.use('/api/user',pmRoute);
app.use('/api/user',mroRoute);
app.use('/api/user',assetRoute);
app.use('/api/user',specRoute);
app.use('/api/user',locationRoute);
app.use('/api/user',meteringRoute );


module.exports = app;