const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const { ConnectToDb } = require("./src/config/db");
const userRoutes = require('./src/routes/userRoutes');
const milkSupplyRoutes = require('./src/routes/milkSupplyRoutes');
const monthlyReportRoutes = require('./src//routes/monthlyReportRoutes');

config();

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

ConnectToDb();

// Route Middleware
app.use('/api/users', userRoutes);
app.use('/api/milk-supply', milkSupplyRoutes);
app.use('/api/monthly-report', monthlyReportRoutes);

const port = process.env.PORT || 8050;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
