const express = require('express');
 const router = express.Router()

 const user = require('../userController/userController')
 router.get('/', user.login)
router.post('/',user.checkLogin)

const homeCnt = require('../userController/homeController')
router.get('/home', homeCnt.home);

const part = require('../userController/parentController')
router.get('/parent',part.parent)
router.post('/parentinfo',part.parentinfo)

const std = require('../userController/studentController')
router.get('/student',std.student)
router.post('/student',std.studentinfo)

const tech = require('../userController/teacherController')
router.get('/teacher', tech.teacher)
router.post('/teacher',tech.teacherinfo)

const grad = require('../userController/gradeControlller')
router.get('/grade', grad.grade)
router.post('/grade', grad.gradeInfo)

const classCnt = require('../userController/classroomController')
router.get('/classroom', classCnt.classroom)
router.post('/classroom', classCnt.classroomInfo)

const cls_stdCnt= require('../userController/cls_stdController')
router.get('/cls_std',cls_stdCnt.cls_std)
router.post('/cls_std',cls_stdCnt.cls_stdInfo)

const search = require('../userController/search')
router.get('/search', search.searchParent)
router.post('/search', search.searchParentInfo)


module.exports = router