const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`);
});

const operationHistoryArray = []

app.post('/new-operation', (req, res) => {
    console.log(req.body); 
    operationHistoryArray.push(req.body);
    console.log(operationHistoryArray);
    res.sendStatus(200);
});// end app.post