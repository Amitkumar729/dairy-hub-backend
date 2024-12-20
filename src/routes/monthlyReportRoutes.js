const express = require('express');
const router = express.Router();
const monthlyReportController = require('../controllers/monthlyReportController');

router.post('/:userId', monthlyReportController.generateMonthlyReport);
router.get('/:userId', monthlyReportController.getMonthlyReportForUser);

module.exports = router;
