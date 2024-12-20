const User = require('../models/userSchema');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users.' });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found.' });
  } 
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, phone, address } = req.body;
  try {
    const user = new User({ name, phone, address });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user.' });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user.' });
  }
};
