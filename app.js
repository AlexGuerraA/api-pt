const express = require('express');
const {connectToDB} = require('./src/config/mongo.db.js')
const Routes = require('./src/routes/index.js')

var app = express();
connectToDB

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


// app.get('/api-pt/', function(req, res) {
//     res.status(200).json({
//         status:'success',
//         message:'Hello World'

//     })
// });

app.use('/api-pt/',Routes)

app.listen(8081);
