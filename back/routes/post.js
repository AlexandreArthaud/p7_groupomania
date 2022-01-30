const express =  require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postController = require('../controllers/post');

router.get('/', postController.getAllPosts);
router.post('/', multer, postController.createPost);

module.exports = router;