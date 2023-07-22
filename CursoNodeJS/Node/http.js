const http = require('http')

http.createServer(function(request, response){

    if(request.url === '/main'){
        response.write('Bienvenido al apartado principal')
        return response.end()
    }

    response.write('Hola mundo ')
    response.end()
}).listen(3000)

console.log("El servidor esta escuchando en el puerto tres mil ");