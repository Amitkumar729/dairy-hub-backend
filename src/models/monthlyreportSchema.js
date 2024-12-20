const mongoose = require("mongoose");

const monthlyReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  month: { type: String, required: true }, // E.g., 'October-2024'
  totalQuantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  dailyEntries: [
    {
      date: { type: Date },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("MonthlyReport", monthlyReportSchema);
