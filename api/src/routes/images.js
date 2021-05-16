const { Router } = require('express');
const router = Router();
const { allImages } = require('../controllers/images.controller');


router.get('/image/search', allImages);
// router.get('/videogames/:name', videogamesfilt);
// router.post('/addGame', addGame);
// router.get('/videogame/:id', videogamedetails);
// router.get('/detailGames', detailsGameDb);



module.exports = router;