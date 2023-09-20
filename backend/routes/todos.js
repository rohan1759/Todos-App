const express = require('express')
const todosController = require("../controller/todos")

const router = express.Router()

router.get("/:email", todosController.get)
router.get("/", todosController.getAllTodos)
router.post("/:email", todosController.add)
router.delete("/", todosController.delete)
router.patch("/", todosController.todoDone)

exports.router = router