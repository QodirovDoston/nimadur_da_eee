const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')

router.route('/category')
    .get(categoryCtrl.getInfo)
    .post(categoryCtrl.createInfo)


router.route('/category/:id')
    .delete(categoryCtrl.deleteInfo)
    .put(categoryCtrl.updateInfo)

module.exports = router