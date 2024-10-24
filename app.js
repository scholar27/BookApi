const {Sequelize} = require('sequelize')
const express = require('express')
const DB_CONFIG = require("./dbConfig");
const app = express()
const port = 3000
const db = require('./models/index');
const Books = db.Books;
(async () => {
    await db.sequelize.sync().then(
        console.log('works')
    ).catch(() => {
            console.log('error true');
        }
    )
})()



app.get('/books/:id', (req, res) => {
    console.log(req.params);
    res.json({
        id: req.params.id,
        title: "Herr der Ringe: die Gefährten"
    })
})

app.get('/books', async (req, res) => {
    const allBooks = await Books.findAll();
    console.log(allBooks);
    res.json({
        id: req.params.id,
        title: "Herr der Ringe: die Gefährten"
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,  () => {

})
