const { Router } = require('express');
const router = Router();
const { searchImages, addImages, imagesFav } = require('../controllers/images.controller');


router.get('/image/search', searchImages);
router.post('/images', addImages);
router.get('/images/', imagesFav);


module.exports = router;