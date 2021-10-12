// require('dotenv').config(); // for Auth...maybe?
const express = require('express');
// establish router middleware. ability to .post .delete etc...
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');
const viewController = require('./viewController');

// Index
router.get('/', dataController.index, viewController.index)
// New // we have a static file in public/fruits/new/index.html so don't have to deal with that here.
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)

// ===== Authentication =====
// router.post('/register', register)


// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)
// Buy
router.get('/:id/buy', dataController.buy, viewController.redirectShow)

module.exports = router
