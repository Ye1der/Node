import express from 'express'
import morgan from 'morgan'

const app = express()
var products = [
  {id: 0, name: 'laptop', price: 1500}
]

app.use(express.json())
app.use(morgan('dev'))

app.get('/products',(req, res) => {
  res.json(products)
})

app.post('/products',(req, res) => {
  const object = {...req.body, id: products.length}
  products.push(object)
  res.send(object)
})

app.put('/products/:id',(req, res) => {
  const num = req.params.id
  const object = products.find(product => product.id == num)
  const newData = req.body

  if(!object){
    return res.status(404).json({product: 'not found'})
  }

  const newArrary = products.map(p => p.id == num ? {...p, ...newData} : p)
  products = newArrary
  res.json(products)
})

app.delete('/products/:id',(req, res) => {
  const num = req.params.id
  const newArrary = products.filter(product => product.id != num)

  if(products.length != newArrary.length){
    products = newArrary
    res.json(products)
  } else {
    res.json({Mensaje: 'Producto no encontrado'})
  }

})

app.get('/products/:id',(req, res) => {
  const num = req.params.id
  const object = products.find(product => product.id == num)

  if(!object){
    return res.status(404).json({product: 'not found'})
  }

  res.json(object)
})

app.listen(3000)
console.log('Server on port', 3000);