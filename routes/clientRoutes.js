const router = require('express').Router()
const clientCtrl = require('../controllers/clientInfo')

router.route('/clients_create')
    .get(clientCtrl.getInfo)
    .post(clientCtrl.createInfo)


router.route('/clients_create/:id')
    .delete(clientCtrl.deleteInfo)
    .put(clientCtrl.updateInfo)

module.exports = router