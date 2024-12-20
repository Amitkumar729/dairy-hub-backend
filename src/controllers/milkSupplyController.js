const MilkSupply = require('../models/milkSupplySchema');

// Add daily milk supply
exports.addMilkSupply = async (req, res) => {
  const { userId, quantity, status } = req.body;
  try {
    const supply = new MilkSupply({ userId, quantity, status });
    await supply.save();
    res.json(supply);
  } catch (error) {
    res.status(500).json({ message: 'Error recording milk supply.' });
  }
};

// Get daily milk supply for a user
exports.getMilkSupplyForUser = async (req, res) => {
  try {
    const supplies = await MilkSupply.find({ userId: req.params.userId });
    res.json(supplies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching milk supply.' });
  }
};
