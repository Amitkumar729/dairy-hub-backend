const MilkSupply = require('../models/milkSupplySchema');
const MonthlyReport = require('../models/monthlyreportSchema');

// Generate monthly report
exports.generateMonthlyReport = async (req, res) => {
  const { month } = req.body;
  try {
    const supplies = await MilkSupply.find({
      userId: req.params.userId,
      date: {
        $gte: new Date(`${month}-01`),
        $lt: new Date(`${month}-31`),
      },
    });

    const totalQuantity = supplies.reduce((total, supply) => total + supply.quantity, 0);
    const totalPrice = totalQuantity * 80; // Assuming price is 50 per litre

    const report = new MonthlyReport({
      userId: req.params.userId,
      month,
      totalQuantity,
      totalPrice,
      dailyEntries: supplies.map(supply => ({
        date: supply.date,
        quantity: supply.quantity,
      })),
    });

    await report.save();
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report.' });
  }
};

// Get monthly report for a user
exports.getMonthlyReportForUser = async (req, res) => {
  try {
    const report = await MonthlyReport.findOne({
      userId: req.params.userId,
      month: req.query.month,
    });
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching monthly report.' });
  }
};
