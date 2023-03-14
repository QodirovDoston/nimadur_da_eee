const router = require('express').Router()
const blogsCtrl = require('../controllers/blogsCtrl')

router.route('/blogs_create')
    .get(blogsCtrl.getInfo)
    .post(blogsCtrl.createInfo)


router.route('/blogs_create/:id')
    .delete(blogsCtrl.deleteInfo)
    .put(blogsCtrl.updateInfo)

module.exports = router