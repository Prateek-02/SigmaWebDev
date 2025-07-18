const Student = require('../models/studentModel');

const getAllStudents = async (req,res) =>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({message:'Error fetching students', error: error.message});
    }
}

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student){
            return res.status(404).json({ message:'Student not found' });
        } 
        res.status(200).json(student);
    } 
    catch (error) {
        res.status(500).json({ message:'Error fetching student', error: error.message });
    }
};

const createStudent = async (req,res) => {
    const {name,age,course} = req.body;
    if(!name || !age || !course) {
        return res.status(400).json({message:'Name, age, and course are required'});
    }

    try{
        const newStudent = new Student({
            name,
            age,
            course,
        })
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    }
    catch(error){
        res.status(500).json({message:'Error creating student', error: error.message});
    }
}

const updateStudent = async (req,res) => {
    try{
        const {id} = req.params;
        const{name,age,course} = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {name,age,course},
            {new :true, runValidators:true}
        );
        if(!updatedStudent){
            return res.status(404).json({message:'Student not found'});
        }
        res.status(200).json({mesasge:'Student updated',updatedStudent});
    }        
    catch(error){
        res.status(500).json({message:'Error updating student', error: error.message});
    }
}

const deleteStudent = async (req,res) => {
    try{
        const{id} = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if(!deletedStudent){
            return res.status(404).json({message:'Student not found'})
        }
        res.status(200).json({mesasge: 'Student deleted succesfully'});
    }
    catch(error){
        res.status(500).json({message:'Error deleting student',error: error.message})
    }
}

module.exports = {getAllStudents,getStudentById ,createStudent, updateStudent, deleteStudent};