const fetch = require('node-fetch');
const unplashs = require('unsplash-js');

URL = require('url').URL;

const createApi = unplashs.createApi;

const unsplash = createApi({
    accessKey: 'aL3Ad3M-Kv0aM09F-Itj0Jg4q0mVOvEuXg6FnixWHu4',
    fetch: fetch,
});

// Busca una imagen en la api.
// parametros: 
//  -query: texto relacionado con lo que se desea buscar
//  -page: Numero de pagina ha buscar
//  -perPage: Cantidad de elementos por pagina
const searchImages = (req, res) => {
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

// Agrega una imagen a favoritos
const addImages = (req, res) => {
    if (!req.body.url) {
        res.status(400).send({ message: "No hay imagen" })
    } else {
        var image = req.body.url;
        res.status(200).json({ image: image });
    }

}

const imagesFav = (req, res) => {
    // localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");
    res.status(200).send({ message: "ok" })
}

// const addCollection = (req, res) => {
//     const title = req.query.title;
//     const description = req.query.description;
//     unsplash.search.collections({
//         title: "Favoritas",
//         description: "imagenes favoritas",
//     }).then(result => {
//         if (result.errors) {
//             // handle error here
//             res.status(400).send({ message: result.errors })
//         } else {
//             // handle success here
//             const photo = result.response;
//             res.status(200).send(photo);
//         }
//     });
// }

module.exports = {
    searchImages,
    addImages,
    imagesFav,
    // addCollection
}