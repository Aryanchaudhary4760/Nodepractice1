const students= require ('../student.json');

function getStudent(req,res){
    try{
        res.json(students)
    }catch(err){
        console.error(err);
    }
}
function getStudentById(req,res){

    try{
        const id= parseInt(req.params.id);
        const student = students.find((stud)=>stud.id ===id);
        res.json(student);
        
    }catch(err){
        console.error(err);
    }
}
module.exports={
    getStudent,
    getStudentById,
 };
