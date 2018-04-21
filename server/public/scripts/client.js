console.log('in js');

$(document).ready(onReady);

/* Client-side script captures user inputs, posts them to the server for server-side manipulation,
and requests results from the server.
User input is captured by assigning it to keys of an object.
The inputs include two value inputs and math operation type (addition, subtraction, multiplication, division).
After posting to the server, the client script requests the history of math operations from the server,
and appends the history to the DOM.
The user may click a button to delete the history. Upon clicking, the client script makes a server request.
Upon this request, the server clears the history data stored there and returns the (now empty) history data array.
This empty array is displayed on the DOM, effectively clearing the history both server- and client-side.*/

// this object will be posted to the server after its keys have been assigned values by further functions
let newOperation = {
    numberOne: '',
    numberTwo: '',
    operation: ''
}

// this client-side variable is later used to capture history data from the server.
let operationHistoryArray = [];

// add event listeners on buttons and display history information to the DOM
function onReady() {
    console.log('in jQ');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#deleteHistoryBtn').on('click', clearOperationHistory);
    getOperationHistory();
}// end onReady


// addition functionality
function addNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'add';
    postNewOperation(newOperation);
    getOperationHistory();
}// end addNumbers

// subtraction functionality
function subtractNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'subtract';
    postNewOperation(newOperation);
    getOperationHistory();
}// end subtractNumbers

// division functionality
function divideNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'divide';
    postNewOperation(newOperation);
    getOperationHistory();
}// end divideNumbers

// multiplication functionality
function multiplyNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'multiply';
    postNewOperation(newOperation);
    getOperationHistory();
}// end multiplyNumbers

// assign input values to operation object
function insertNumbers() {
    newOperation.numberOne = $('#numberOne').val();
    newOperation.numberTwo = $('#numberTwo').val();
    return newOperation;
}// end insertNumbers

// send data (input field values and operation type) to server
function postNewOperation(newOperation) {
    $.ajax({
        method: 'POST',
        url: '/new-operation',
        data: newOperation
    })
        .then(function (response) {
        });
}// end postNewOperation

// request operation history array from server
function getOperationHistory() {
    $.ajax({
        type: 'GET',
        url: '/operation-history'
    })
        .then(function (response) {
            displayOperationHistory(response);
        });
}// end getOperationHistory

// request to empty history array on server
function clearOperationHistory() {
    $.ajax({
        type: 'GET',
        url: '/clear-history'
    })
        .then(function (response) {
            displayOperationHistory(response);
        });
}// end clearOperationHistory

// loop through history array and prepend data to DOM
function displayOperationHistory(historyArray) {
    // clear the history div on DOM
    emptyHistoryDiv();
    // loop and prepend data to DOM
    for (let i = 0; i < historyArray.length; i++) {
        let numberOne = historyArray[i].numberOne;
        let numberTwo = historyArray[i].numberTwo;
        let operation = historyArray[i].operation;
        let result = historyArray[i].result
        $('#historyDiv').prepend(`<p>
        ${numberOne} ${operation} ${numberTwo} = ${result}
    </p>`);
    }
}// end displayOperationHistory

function emptyHistoryDiv() {
    $('#historyDiv').empty();
}// end emptyHistoryDiv
