const mysql = require('mysql');

const db = process.env;

const connection = mysql.createConnection({
    host:db.host,
    database: db.database,
    user: db.user,
    password: db.password

})

connection.connect(err=> {!err? console.log("Connection successful to the database!"): console.log(err); })



module.exports = connection;