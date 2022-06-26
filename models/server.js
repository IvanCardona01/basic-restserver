const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';


        //Middlewares
        this.middlewares();

        this.routes();

        this.start();
    }

    middlewares() {

        //Seguridad del servidor
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use(this.usersPath, require('../routes/users'));
    }

    start() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;