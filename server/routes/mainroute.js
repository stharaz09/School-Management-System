const express = require('express');
 const router = express.Router()
 const user = require('../userController/userController')

 router.get('/', user.index)
 router.get('/parent', user.parentinfo)




module.exports = router