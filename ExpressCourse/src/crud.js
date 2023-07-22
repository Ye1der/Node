// IMportamos la libreria o framework express
import express from "express";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Guardamos la funcion en una constante app
const app = express();

// Peticiones o lenguaje HTTP (GET, POST, PUT, DELETE)

// Sirve para enviar informacion que pide el cliente
app.get("/products", (req, res) => {
  // se usa para enviar archivos, hay que poner el objeto con el root dirname para que sepa donde buscar
  res.sendFile("./Express.png", {
    root: __dirname,
  }); 
});

app.get("/users", (req, res) => {
  res.json({
    name: "Yeider",
    apellido: "Peña",
    edad: 19,
  });
});

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

app.use(express.text()) // Se tiene que llamar la funcion text para que reconozca texto enviado desde el cliente

// Sirve para agregar o leer informacion que manda el cliente
app.post("/enviar", (req, res) => {
  res.send(req.body);
});

// Params en urls, sirven para mostrar o interactuar con parametros en las urls
app.get('/parametro/:user', (req, res) => {
  res.send(req.params.user)
})

// Tambien se pueden capturar querys desde la url
app.get('/sendQuerys', (req, res) => {
  const query = req.query
  res.send(`API: ${query.apiKey}; Pagina: ${query.pagina}`)
})

// Sirve para actualizar la informacion que quiere el cliente (esto actualiza todo el objeto o tabla)
app.put("products", (req, res) => {
  res.send("Actualizando informacion");
});

// Sirve para eliminar informacion
app.delete("products", (req, res) => {
  res.send("Eliminando informacion");
});

// Sirve para actualizar solo un apartado de un objeto, como el nombre, la edad, etc sin tener que actualizar todo el objeto como lo hace PUT
app.patch("products", (req, res) => {
  res.send("Actualizando solo un elemento de la informacion");
});

app.listen(3000);
console.log("Servidor ejecutandose en el puerto", 3000);
console.log(__dirname);
