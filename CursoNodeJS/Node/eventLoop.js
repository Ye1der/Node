
const http = require('http')

http.createServer((req, res) => {

    if(req.url === '/main'){
        for(let i = 0; i < 100000; i++){
            console.log(Math.random()*i);
        }

        return res.end("Bienvenido a la pagina principal")
    }

    if(req.url === "/"){
        return res.end("Bienvenido")
    }

    res.end("not found")

}).listen(3000)

console.log("El servidor se esta ejecutando en el puerto 3000");