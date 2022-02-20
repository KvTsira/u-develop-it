const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//express midddleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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