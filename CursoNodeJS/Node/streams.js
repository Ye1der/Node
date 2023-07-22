// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigFile.txt', ' Hola mundo '.repeat(1000000))
// }

// createBigFile()

const {createReadStream} = require('fs')
require('colors')

const stream = createReadStream('./data/bigFile.txt')

stream.on('data', (chunk) => {
    console.log(chunk.toString())
})