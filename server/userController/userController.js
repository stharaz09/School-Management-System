const con = require('../../database_setup/database')

// console.log(parent[0].fname);

// ------ Login Form ---------
exports.login = (req,res)=>{
res.render('login')
}
exports.checkLogin = (req,res)=>{
    const LogInUser = req.body.username;
    const LogInpassword = req.body.password;
    const sql = 'SELECT username, password FROM admin WHERE admin_id = ?'
    con.query(sql,[1],(err,result)=>{
       if(!err){
           const user = result[0].username
           const password = result[0].password
           console.log('Login Test');
            if(user === LogInUser && password === LogInpassword){
                res.redirect('/home');
                console.log("LogIn Successfully!");
            }
            else{
                res.redirect('/')                         
            }
       }else{
           console.log(err);
       }
    })
}



