const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()


const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))



const route = require(__dirname + '/server/routes/mainroute')
app.use('/', route);


app.listen(process.env.port, ()=>{
    console.log("Server start at " + process.env.port)
})

