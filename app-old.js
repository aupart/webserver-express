const http = require('http');


//crear el servidor

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'edgardo',
            apellido: 'cayo',
            url: req.url
        }
        res.write(JSON.stringify(salida));

        //res.write('hola mundo');
        res.end();
    })
    .listen(8080);

console.log('escuchando puerto 8080');