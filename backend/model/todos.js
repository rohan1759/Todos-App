const mongoose = require('mongoose')

const { Schema } = mongoose

const todosSchema = new Schema({
    title: {type: String, required: true},
    dueDate: {type: Date, required: true},
    createdAt: {type: Date, required: true},
    email: {type: String, required: true},
    status: {type: String, default: "pending", required: true}
})

exports.Todos = mongoose.model("Todos", todosSchema)