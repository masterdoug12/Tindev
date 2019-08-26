const  express = require('express');


const routes = express.Router();


    routes.get('/',(req,res) => {
        return res.json({message:`heello ${req.query.name}`});
    });

   routes.post('/devs',(req,res) => {
       console.log(req.body.name);
        return res.json({ok:true});
    });

   module.exports = routes;