const { response, request } = require('express');

const usersGet = ( req = request, res = response ) => {

    const query = req.query

    res.json({
        message: 'get API - controller',
        query
    });
}

const usersPost = ( req = request, res = response ) => {
    
    const body = req.body;
    
    res.json({
        message: 'post API - controller',
        body
    });
}

const usersPut = ( req = request, res = response ) => {

    const { id } = req.params;

    res.json({
        message: 'put API - controller',
        id
    });
}

const usersDelete = ( req = request, res = response ) => {
    res.json({
        message: 'delete API - controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}