const model = require('../model/user')

const User = model.User

exports.add = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(doc => res.json(doc))
        .catch(err => {
            const errorMessage = "An error occurred while saving the user.";
            console.error(errorMessage, err);
            res.status(406).json({ error: errorMessage });
        })
        // .catch(err => res.json(err))
        
}

exports.getAll = async (req, res) => {
    const data = await User.findOne({name: req.params.id})
    res.json(data)
}