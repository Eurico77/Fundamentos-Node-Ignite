const server = require('./app')
const PORT = 3333

server.listen(PORT, () => {
    console.log('rodando');
})