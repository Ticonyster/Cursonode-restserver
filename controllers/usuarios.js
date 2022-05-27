const {response, request} = require('express')

const usuariosGet = (req = request, res = response) => {

    const {q, nombre, apikey, page, limit} = req.query

    res.json({
        msg: 'get API - controlador',
        q, nombre, apikey
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body

    res.status(201).json({
        msg: 'post API - controlador',
        nombre, edad
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'put API - controller',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}