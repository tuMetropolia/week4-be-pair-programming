const User = require("../models/userModel.js");

const getAllUsers = (req, res) => {
  res.json(User.getAll());
}

const createUser = (req, res) => {
  // const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  // const newUser = User.addUser(
  //   name,
  //   email,
  //   password,
  //   phone_number,
  //   gender,
  //   date_of_birth,
  //   membership_status
  // );
    const newUser = User.addUser({ ...req.body });
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ message: "Fail to create user" });
    }
}

const getUserById = (req, res) => {
    const user = User.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

const updateUser = (req, res) => {
    const updatedUser = User.updateOneById(req.params.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

const deleteUser = (req, res) => {
    const isDeleted = User.deleteOneById(req.params.id);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser};