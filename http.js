const HTTP = require('http');
let moment = require('moment');
const PORT = 3001

const SERVER = HTTP.createServer((request,response)=>{
    let hora = moment().hour();
    let mensaje = 'Buenas noches';
    if(hora >= 6 && hora <=12) mensaje = 'Buenos dias!';
    if(hora >= 13 && hora <=19) mensaje = 'Buenos tardes!';
    response.end(`${mensaje} son las ${hora}`);
});

let connectedServer = SERVER.listen(PORT, ()=>{
    console.log(`server on http://localhost:${PORT}`);
});

connectedServer.on('error', error => console.log(error));