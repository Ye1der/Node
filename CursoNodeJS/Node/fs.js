
const fs = require('fs')

const first = fs.readFileSync('./data/first.txt', 'utf-8')
console.log(first);

const second = fs.readFileSync('./data/second.txt')
console.log(second.toString());

fs.writeFileSync('./data/third.txt', ' Tercer Hola mundo por segunda vez', {
    flag: 'a'
})

const third = fs.readFileSync('./data/third.txt')
console.log(third.toString());