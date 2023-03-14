const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth, userCtrl.getUser)

router.get('/logout', userCtrl.logout)

router.put('/user_update/:id', auth, userCtrl.editProfil)

router.get('/get_all_user', userCtrl.getAllUser)

router.delete('/deleted_user/:id', userCtrl.deletedUser)

module.exports = router