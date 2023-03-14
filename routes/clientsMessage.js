const router = require('express').Router()
const clientsMessage = require('../controllers/clientsMessageCtrl')

router.route('/clients_message')
    .get(clientsMessage.getInfo)
    .post(clientsMessage.createInfo)


router.route('/clients_message/:id')
    .delete(clientsMessage.deleteInfo)
    .put(clientsMessage.updateInfo)

module.exports = router