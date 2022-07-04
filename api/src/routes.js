const { Router } = require('express');
const UserController = require('./controllers/UserController');

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Olá'}))
router.get('/users/:id', UserController.show);

module.exports = router;
