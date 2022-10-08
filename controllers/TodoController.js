const Todo = require("../models/Todo")

exports.createTodo = async (req,res)=>{
    console.log(req.body)
    const {title , description,status} = req.body
    const todo = new Todo(req.body)
    await todo.save()
    .then((todo)=>{
        return res.status(200).json({
            message: "ok",
            data: todo
        })
    })
    .catch(err=>res.status(400).json({
        error:err
    }))
}


exports.getAllTodos = async (req,res)=>{
     await Todo.find({})
    .then((todos)=>res.status(200).json({message:"ok" , data:todos}))
    .catch((err)=>res.status(400).json({error:err}))
}

exports.getTodoById = (req,res)=>{
    // console.log("idddddddd",req.params.id)
    const todo = Todo.findById(req.params.id).exec((err,todo)=>{
        if(err) res.status(400).json({error:err})
        return res.status(200).json({
            message:"ok",
            data:todo
        })
    }) 
}


exports.updateTodo = async (req,res)=>{
    const {_id , title , description ,status} = req.body.todo
    const id = _id; 
    Todo.findByIdAndUpdate(
        {_id: id},
        {$set: {title, description ,status}},
        {new:true,runValidators: true },
        (err,todo)=>{
            if( err || !todo) return res.status(400).json({error:err.message})
            
            res.status(200).json({message:"ok" , data:todo})
        }
    )
}


exports.delTodo = (req,res,id)=>{
   
    Todo.findByIdAndRemove(req.params.id,(err,todo)=>{
        if(err) return res.status(400).json({error:"error in deleting todo"})

        return res.status(200).json({
            message:"ok",
            data: todo
        })
    })
}