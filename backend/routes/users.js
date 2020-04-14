const router = require("express").Router();
let User = require("../models/user.model");

//get ALL users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// //get a particular user with the hash ID
// router.route("/:id").get((req, res) => {
//   User.findById(req.params.id)
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

//add a new user
router.route("/add").post((req, res) => {
  const fullName = req.body.fullName;
  const userMail = req.body.userMail;
  const userPhone = req.body.userPhone;
  const userDOB = Date.parse(req.body.userDOB);
  const newUser = new User({ fullName, userMail, userPhone, userDOB });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
