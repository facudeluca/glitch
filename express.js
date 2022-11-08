let express = require('express');
let moment = require('moment');
const PORT = 3001;
let app = express();

let visitas = 0

app.get('/', (req, res, next)=>{
    res.send('<h1 style="color:blue;">Hola</h1>');
})
app.get('/visitas', (req, res, next)=>{
    visitas++
    res.send(`total visitas=${visitas}`);
})
app.get('/fyh', (req, res, next)=>{
    let hora = moment().format('dddd, D/M/YYYY, H:mm')
    res.json({hora});
})

// app.all('/', (req, res, next)=>{
//     res.send(`Estoy en el método ALL de Express`);
// })
// app.get('/', (req, res, next)=>{
//     res.send(`Estoy en el método ${req.method}`);
// })
// app.post('/', (req, res, next)=>{
//     res.send(`Estoy en el método ${req.method}`);
// })
// app.put('/', (req, res, next)=>{
//     res.send(`Estoy en el método ${req.method}`);
// })
// app.delete('/', (req, res, next)=>{
//     res.send(`Estoy en el método ${req.method}`);
// })


app.listen(PORT, ()=>console.log(`server on http://localhost:${PORT}`))

