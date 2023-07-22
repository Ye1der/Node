const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondDTa, thirdData)=>{
    console.log(data);
    console.log(secondDTa);
    console.log(thirdData);
})

customEmitter.emit('response', 'primero', 'segundo', 'tercero' )