const { databaseProductos } = require("../database/databaseProductos.js")

const controladoresApi = {
    root: (req, res) => {
        res.redirect('/api/productos');
    },
    getAll: (req, res) => {
        res.json(databaseProductos.getAll())
    },
    create: (req, res) => {

        let obj = {
            "tittle": req.body.tittle,
            "price": req.body.price,
            "thumbnail": req.body.thumbnail,
            "id": databaseProductos.getAll().length + 1
        }
        res.json(databaseProductos.create(obj))
    },
    random: (req, res) => {
        res.json(databaseProductos.random())
    },
    getOne: (req, res) => {
        let id = parseInt(req.params.id)
        res.json(databaseProductos.getOne(id))
    },
    update: (req, res) => {
        let id = parseInt(req.params.id)
        let obj = {
            "tittle": req.body.tittle,
            "price": req.body.price,
            "thumbnail": req.body.thumbnail,
            "id": id
        }
        res.json(databaseProductos.update(obj))
    },
    delete: (req, res) => {
        let id = parseInt(req.params.id)
        res.json(databaseProductos.delete(id))
    }
}

module.exports = { controladoresApi }