const express = require('express');
const app = express();
const students = require('./routes/students');
app.use(students);
// const express  = require('express');
// const app = express();
// const user = require('./routes/user');
// app.use(user)

app.listen(3000,(err)=>{
    if(err){
        console.log('Server Error',err);
    }else{
        console.log('Server is running on port 3000');
    }
})  