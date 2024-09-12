const students = require('../student.json');
const express = require('express');
const  router= express.Router();
const studentController=require ('../controllers/studentController.js');


router.get('/', function(req, res){
        studentController.getStudent(req,res);
})
router.get('/student/:id',(req,res)=>{
    studentController.getStudentById(req,res);
})
module.exports = router;