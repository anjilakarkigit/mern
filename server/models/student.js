import mongoose from  'mongoose'

// This is Schema

const studentSchema = new mongoose.Schema({
    regNo : Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A',
    }
})

// This is model
// const name is same in both places
 
const student = mongoose.model('student', studentSchema )

export default student 