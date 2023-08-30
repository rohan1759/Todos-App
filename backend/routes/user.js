const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router.get("/:id", userController.getAll)
router.post("/", userController.add)

exports.router = router