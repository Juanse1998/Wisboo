const fetch = require('node-fetch');
const unplashs = require('unsplash-js');

URL = require('url').URL;

const createApi = unplashs.createApi;

const unsplash = createApi({
    accessKey: 'aL3Ad3M-Kv0aM09F-Itj0Jg4q0mVOvEuXg6FnixWHu4',
    fetch: fetch,
});

// Busco los detalles de un juego 
const allImages = (req, res) => {
    unsplash.search.getPhotos({
        query: req.query.query,
        page: req.query.page,
        perPage: req.query.perPage
    }).then(result => {
        if (result.errors) {
            // handle error here
            res.status(400).send({ message: result.errors })
        } else {
            // handle success here
            const photo = result.response;
            res.status(200).send(photo);
        }
    });
}


module.exports = {
    allImages,
}