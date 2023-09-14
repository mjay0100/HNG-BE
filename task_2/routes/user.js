const express = require("express");
const router = express.Router();

const {
  allUsers,
  newUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
// const authenticationMiddleWare = require("../middleware/auth");

router.route("/").get(allUsers).post(newUser);
router.route("/:user_id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
