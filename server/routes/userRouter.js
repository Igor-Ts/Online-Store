const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddlewear = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddlewear, userController.check)

module.exports = router