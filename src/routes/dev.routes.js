const express = require('express');
const router = express.Router();
const devController = require('../controllers/Developments.controllers.js');

router.get('/', devController.index);
router.post('/', devController.create);

router.put('/:id', devController.update);
router.delete('/:id',devController.remove);

module.exports = router;
