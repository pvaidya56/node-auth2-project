const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/all", (req, res) => {

	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

module.exports = router;
