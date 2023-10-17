const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


conectarDB()



// app.get('/', (req, res) => {
//     res.send('hola mundo')
// })

app.use('/api', require('./routes/routes'));


let port = 40000

app.listen(4000, () => {
    console.log('servidor arriba en http://localhost:${port}')
})