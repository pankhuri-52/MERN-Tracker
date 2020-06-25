const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find() /* give the list of all the users from mongodb database */
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save() /* new user is saved to the mongodb atlas database */
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;