const express = require('express');
const router = express.Router();
const milkSupplyController = require('../controllers/milkSupplyController');

router.post('/', milkSupplyController.addMilkSupply);
router.get('/:userId', milkSupplyController.getMilkSupplyForUser);

module.exports = router;
