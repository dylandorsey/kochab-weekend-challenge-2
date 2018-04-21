const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// serve static files
app.use(express.static('server/public'));

// enable body parser functionality
app.use(bodyParser.urlencoded({ extended: true }));

// listen for requests on PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// array used for storing history of math operations sent from client
const operationHistoryArray = []

// responds to client with history of math operations
app.get('/operation-history', (req, res) => {
    res.send(operationHistoryArray);
});

// receives client data, performs math operation, and stores input-and-result data server-side
app.post('/new-operation', (req, res) => {
    // store number inputs
    req.body.numberOne = Number(req.body.numberOne);
    req.body.numberTwo = Number(req.body.numberTwo);
    // store operation input
    operation = req.body.operation;
    // respond that POST was successfull
    res.sendStatus(200);
    // determine which math operation to perform,
    // convert text to math symbol,
    // call math operation function,
    // store result as a variable
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
    // assign math operation result to math data object key
    req.body.result = result;
    operationHistoryArray.push(req.body);
    console.log(operationHistoryArray);
});// end app.post

// upon request, clear data from operation history array
app.get('/clear-history', (req, res) => {
    operationHistoryArray.splice(0, operationHistoryArray.length);
    res.send(operationHistoryArray);
});// end app.post

// addition operation
function add(arrayObject) {
    result = arrayObject.numberOne + arrayObject.numberTwo;
    return result;
}// end addition operation

// subtraction operation
function subtract(arrayObject) {
    result = arrayObject.numberOne - arrayObject.numberTwo;
    return result;
}// end subtraction operation

// multiplication operation
function multiply(arrayObject) {
    result = arrayObject.numberOne * arrayObject.numberTwo;
    return result;
}// end multiplication operation


// division operation
function divide(arrayObject) {
    result = arrayObject.numberOne / arrayObject.numberTwo;
    return result;
}// end division operation