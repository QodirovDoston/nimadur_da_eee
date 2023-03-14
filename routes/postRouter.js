const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')

router.route('/post')
    .get(postCtrl.getPost)
    .post(postCtrl.createPost)


router.route('/post/:id')
    .delete(postCtrl.deletePost)
    .put(postCtrl.updatePost)

module.exports = router