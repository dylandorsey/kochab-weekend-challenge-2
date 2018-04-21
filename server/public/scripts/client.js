console.log('in js');

$(document).ready(onReady);

let newOperation = {
    numberOne: '',
    numberTwo: '',
    operation: ''
}

let operationHistoryArray = [];

function onReady() {
    console.log('in jQ');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#deleteHistoryBtn').on('click', clearOperationHistory);
    getOperationHistory();
}

function addNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'add';
    postNewOperation(newOperation);
    getOperationHistory();

}

function subtractNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'subtract';
    postNewOperation(newOperation);
    getOperationHistory();
}

function divideNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'divide';
    postNewOperation(newOperation);
    getOperationHistory();
}

function multiplyNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'multiply';
    postNewOperation(newOperation);
    getOperationHistory();
}

function deleteHistory() {
    console.log('clicked delete history');
}

function insertNumbers() {
    newOperation.numberOne = $('#numberOne').val();
    newOperation.numberTwo = $('#numberTwo').val();
    return newOperation;
}

function postNewOperation(newOperation) {
    $.ajax({
        method: 'POST',
        url: '/new-operation',
        data: newOperation
    })
        .then(function (response) {
        });
}

function getOperationHistory() {
    $.ajax({
        type: 'GET',
        url: '/operation-history'
    })
    .then(function (response) {
         displayOperationHistory(response);
    });
}

function clearOperationHistory() {
    $.ajax({
        type: 'GET',
        url: '/clear-history'
    })
        .then(function (response) {
            displayOperationHistory(response);
        });
}

function displayOperationHistory(historyArray) {
    emptyHistoryDiv();
    for (let i = 0; i<historyArray.length; i++) {
        let numberOne = historyArray[i].numberOne;
        let numberTwo = historyArray[i].numberTwo;
        let operation = historyArray[i].operation;
        let result = historyArray[i].result
        $('#historyDiv').prepend(`<p>
        ${numberOne} ${operation} ${numberTwo} = ${result}
    </p>`);
    }
}

function emptyHistoryDiv() {
    $('#historyDiv').empty();
}
