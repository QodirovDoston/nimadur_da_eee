const router = require('express').Router()
const servicesCtrl = require('../controllers/servicesCtrl')

router.route('/services')
    .get(servicesCtrl.getInfo)
    .post(servicesCtrl.createInfo)


router.route('/services/:id')
    .delete(servicesCtrl.deleteInfo)
    .put(servicesCtrl.updateInfo)

module.exports = router