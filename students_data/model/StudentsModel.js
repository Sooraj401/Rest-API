const mongoose = require('mongoose')

const StudentSchema =  new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    gender: {
        type : String,
        require : true
    },
    father: {
        type : String,
        require : true
    },
    blood: {
        type : String,
        require : true
    },
    address: {
        type : String,
        require : true
    },
    ph: {
        type : Number,
        require : true
    },
    department: {
        type : String,
        require : true
    },
      
},{versionKey:false});

const Students = mongoose.model('students', StudentSchema);

module.exports = Students;