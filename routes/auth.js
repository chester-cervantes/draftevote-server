const router = require('express').Router();

const handler = require('../handlers');

router.post('/register', handler.register);
router.post('/login', handler.login);
router.get('/hello', handler.test);
module.exports = router;