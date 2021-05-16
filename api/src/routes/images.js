const { Router } = require('express');
const router = Router();
const { searchImages, addImages, imagesFav, addCollection } = require('../controllers/images.controller');


router.get('/image/search', searchImages);
router.post('/images', addImages);
// router.get('/images/', imagesFav);
// router.post('/addCollections', addCollection);
// router.get('/videogame/:id', videogamedetails);
// router.get('/detailGames', detailsGameDb);



module.exports = router;