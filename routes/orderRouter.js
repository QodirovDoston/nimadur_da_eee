const router = require('express').Router()
const orderCtrl = require('../controllers/orderCtrl')

router.route('/ordered')
    .get(orderCtrl.getInfo)
    .post(orderCtrl.createInfo)


router.route('/ordered/:id')
    .delete(orderCtrl.deleteInfo)

module.exports = router