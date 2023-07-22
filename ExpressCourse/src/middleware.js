import express from 'express' 

const app = express()

app.use((req, res, next) => {
  console.log(`Route: ${req.url}; Method: ${req.method};`);
  next()
})

app.use((req, res, next) => {
  if(req.query.email === 'yeiderjp12@gmail.com'){
    next()
  } else {
    res.send('No estas autorizado')
  }
})

app.get('/profile', (req, res) => {
  res.send('Profile seccion')
})

app.listen(3000)
console.log("Servidor ejercutandose en el puerto", 3000);