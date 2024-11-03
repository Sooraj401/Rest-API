var express = require('express');
var router = express.Router();
const Students = require("../model/StudentsModel")



router.post('/add', async (req, res) =>{
  try{
    const student = new Students(req.body);
    const saveStudent = student.save();
    return res.status(200).json({message : "Added Successfully!"})
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data', error }); 
  }
});


router.get('/', async (req,res) =>{
  try{
    const StudentData = await Students.find();
    return res.json(StudentData);
  }catch (error) {
    console.error(error);
    res.status(500).json({message : "Error fetching data"});
  }

});

router.get('/students/:id', async (req, res) =>{
  try{
    const students = await Students.findOne({_id:req.params.id});
    if(!students) {
      return res.status(404).json({message: "Student not found in the Database"})
    }
  return res.json(students);
  }catch (error) {
    console.error(error);
    res.status(500).json({message:"Error fetching Data"});
  }
});

router.delete('/terminate/:id', async (req, res) =>{
  try{
    const remove = await Students.deleteOne({_id:req.params.id});
    var studentName = new Students(req.body)
    const std = studentName.name;
    if(remove.deletedCount === 0){
      return res.status(404).json({message: "Student not found in the Database"})
    }
    return res.status(200).json({message:`Deleted the data of ${std}`})
  }catch (error) {
    res.status(500).json({message: "Error deleting Data"});
  }
  
});

router.put('/update/:id', async(req, res) => {
  try{
    const modify = await Students.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
    if(!modify) {
      return res.status(404).json({message: "Student not found in the Database"});
    }
    return res.json({message: "Data is updated successfully!"});
  }catch (error) {
    res.status(500).json({message: "Error updating data"})
  }
})

module.exports = router;
