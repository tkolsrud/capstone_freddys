const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.guitars.index);
router.post('/create', ctrl.guitars.create);
router.get('/:id', ctrl.guitars.show);
router.delete('/:id', ctrl.guitars.destroy);
router.put('/:id/update', ctrl.guitars.update);

// exports
module.exports = router;