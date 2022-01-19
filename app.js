const express = require('express');
const dotenv = require('dotenv');
dotenv.config()


const app = express();

app.set('view engine', 'ejs')



const route = require(__dirname + '/server/routes/mainroute')
app.use('/', route);


app.listen(process.env.port, ()=>{
    console.log("Server start at " + process.env.port)
})

