const router = require('express').Router()
const teamCtrl = require('../controllers/teamCtrl')

router.route('/teams')
    .get(teamCtrl.getInfo)
    .post(teamCtrl.createInfo)


router.route('/teams/:id')
    .delete(teamCtrl.deleteInfo)
    .put(teamCtrl.updateInfo)

module.exports = router