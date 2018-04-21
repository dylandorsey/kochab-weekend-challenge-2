const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

const operationHistoryArray = []

app.get('/operation-history', (req, res) => {
    res.send(operationHistoryArray);
});

app.post('/new-operation', (req, res) => {
    console.log(req.body);
    req.body.numberOne = Number(req.body.numberOne);
    req.body.numberTwo = Number(req.body.numberTwo);
    operation = req.body.operation;
    res.sendStatus(200);
    if (operation == 'add') {
        req.body.operation = '+';
        result = add(req.body);
    }
    else if (operation == 'subtract') {
        req.body.operation = '-';
        result = subtract(req.body);
    }
    else if (operation == 'multiply') {
        req.body.operation = '*'
        result = multiply(req.body);
    }
    else if (operation == 'divide') {
        req.body.operation = '/';
        result = divide(req.body);
    }
    req.body.result = result;
    operationHistoryArray.push(req.body);
    console.log(operationHistoryArray);
});// end app.post

app.get('/clear-history', (req, res) => {
    operationHistoryArray.splice(0, operationHistoryArray.length);
    res.send(operationHistoryArray);
});// end app.post

function add(arrayObject) {
    result = arrayObject.numberOne + arrayObject.numberTwo;
    console.log(result);
    return result;
}

function subtract(arrayObject) {
    result = arrayObject.numberOne - arrayObject.numberTwo;
    console.log(result);
    return result;
}


function multiply(arrayObject) {
    result = arrayObject.numberOne * arrayObject.numberTwo;
    console.log(result);
    return result;
}

function divide(arrayObject) {
    result = arrayObject.numberOne / arrayObject.numberTwo;
    console.log(result);
    return result;
}