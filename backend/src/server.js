const  express = require('express');
const routes = require ('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://admin:Pro010889@cluster0-rkrag.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser :true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);