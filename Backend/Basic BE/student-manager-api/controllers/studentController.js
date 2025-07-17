let id = 1;
const students = [];

const getAllStudents = (req,res) =>{
    try{
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching students', error: error.message});
    }
}

const createStudent = (req,res) => {
    const {name,age,course} = req.body;
    if(!name || !age || !course) {
        return res.status(400).json({message: 'Name, age, and course are required'});
    }

    try{
        const newStudent ={
            id : id++,
            name,
            age,
            course,
        }
        students.push(newStudent);
        res.status(201).json(newStudent);
    }
    catch(error){
        res.status(500).json({message: 'Error creating student', error: error.message});
    }
}

const updateStudent = (req,res) => {
    const {id} = req.params;
    const{name,age,course} = req.body;

    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if(studentIndex === -1){
        return res.status(404).json({message: 'Student not found'});
    }
    
    if(!name || !age || !course) {
        return res.status(400).json({message: 'Name, age, and course are required'});
    }

    try{
        const updateStudent = {
            id : parseInt(id),
            name,
            age,
            course,
        }
        students[studentIndex] = updateStudent;
        res.status(200).json({mesasge:'Student updated',updateStudent});
    }
    catch(error){
        res.status(500).json({message:'Error updating student', error: error.message});
    }
}

const deleteStudent = (req,res) => {
    const {id} = req.params;
    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if(studentIndex === -1){
        return res.status(404).json({message: 'Student not found'});
    }

    try{
        students.splice(studentIndex, 1);
        res.status(200).json({message:'Student Deleted'});
    }
    catch(error){
        res.status(500).json({message:'Error deleting student', error: error.message});
    }
}

module.exports = {getAllStudents, createStudent, updateStudent, deleteStudent};