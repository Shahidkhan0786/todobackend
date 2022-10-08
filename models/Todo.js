const mongoose = require("mongoose")


var todoSchema = new mongoose.Schema({
    title:{
        type:String,
        trim: true,
        required: [true , "title is required"]
    },
    description:{
        type: String,
        trim: true,
    },
    status:{
        type: String,
        trim:true,
        enum:['pending' , 'complete'],
        default: 'pending'
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;