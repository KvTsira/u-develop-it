const express = require("express");
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express midddleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connect to database
const db= mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'WelcomeMondays1806!',
        database: 'election'
    },
    console.log('Connected to the election database')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//get route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use((req, res) => {
    res.status(404).end();
});


//start the express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})