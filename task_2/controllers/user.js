const User = require("../model/user");

const allUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const newUser = async function (req, res) {
  const name = req.body;
  const newUser = await User.create(name);
  res.status(201).json({ newUser });
};
const getUser = async function (req, res) {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  res.status(200).json({ user });
};

const updateUser = async function (req, res) {
  const { user_id } = req.params;
  const name = req.body;
  if (name === "") {
    throw new Error("name cannot be empty");
  }
  const user = await User.findByIdAndUpdate(user_id, name, {
    new: true,
    runValidators: true,
  });
  if (!name) {
    throw new Error(`No user with id ${user_id}`);
  }
  res.status(200).json({ user });
};

const deleteUser = async function (req, res) {
  const { user_id } = req.params;
  const removedUser = await User.findByIdAndDelete(user_id);
  res.status(200).json({ msg: "removed user", removedUser });
};

module.exports = { allUsers, newUser, getUser, deleteUser, updateUser };
