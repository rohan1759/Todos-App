const model = require("../model/todos")

const Todos = model.Todos

exports.get = async (req, res) => {
    const created = req.query.sort
    if(created == "createdAt"){
        const data = await Todos.find({email: req.params.email}).sort({createdAt: -1})
        res.json(data)
    }else{
        const data = await Todos.find({email: req.params.email}).sort({dueDate: -1})
        res.json(data)
    }
}

exports.getAllTodos = async (req, res) => {
    const data = await Todos.find()
    res.json(data)
}

exports.add = (req, res) => {
    const todos = new Todos(req.body)
    todos.email = req.params.email
    // todos.createdAt = (new Date(Date.now())).toISOString().split("T")[0]
    todos.createdAt = (new Date(Date.now())).toISOString()
    todos.save()
        .then(doc => res.json(doc))
        .catch(err => res.json(err))
}

exports.delete = async (req, res) => {
    const deleteId = req.headers.deleteid
    const data = await Todos.findOneAndDelete({title: deleteId})
    res.json(data)
}

exports.todoDone = async (req, res) => {
    const todoId = req.headers.todoid
    const data = await Todos.findOneAndUpdate({title: todoId}, {status: "completed"})
    res.json(data)
}

// exports.getFilter = async (req, res) => {
//     const data = await Todos.find({"email": req.params.email}).sort({req.: -1})
// }