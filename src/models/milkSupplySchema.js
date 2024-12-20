const mongoose = require("mongoose");

const milkSupplySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  quantity: { type: Number, required: true },
  status: { type: Boolean,  },
});

module.exports = mongoose.model("MilkSupply", milkSupplySchema);
