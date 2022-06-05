const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());

const tea = {
    "oolong": {
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'caffeinated': true,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },
    "matcha": {
        'type': 'green',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'caffeinated': false,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },
    "unknown": {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 200,
        'caffeinated': false,
        'steepTimeSeconds': 0,
        'flavor': 'unknown'
    },
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/api/:teaName", (req, res) => {
    console.log(req.params.teaName);
    const teaName = req.params.teaName.toLowerCase();
    if(tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown']);
    }    
})

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server running on port ${PORT}. Better go catch it!`);
})