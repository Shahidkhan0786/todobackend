const router = require("express").Router()
const {createTodo,getAllTodos
    ,getTodoById,updateTodo,delTodo} = require('../controllers/TodoController')
router.get('/' , (req,res)=>{
    res.send("Todos list")
});

router.post('/createtodo', createTodo);
router.get('/todos', getAllTodos);
router.get('/todo/:id', getTodoById);

//update todo
router.put('/todo/update' , updateTodo);

//delete todo
router.delete('/todo/del/:id' , delTodo);

module.exports = router