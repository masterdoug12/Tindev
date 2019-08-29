const axios = require('axios');
const Dev = require('../models/dev');
module.exports = {
   async store(req,res){
        //header é o user logado

        const {devID} = req.params;
        const {user} = req.headers;

        loggedDev = await Dev.findById(user);
        targetDev = await Dev.findById(devID);

        if (!targetDev){
            return res.status(400).json({error : 'Dev não existe'});
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
    }
}