console.log('in js');

$(document).ready(onReady);

let newOperation = {
    numberOne: '',
    numberTwo: '',
    operation: ''
}

function onReady() {
    console.log('in jQ');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#deleteHistoryBtn').on('click', deleteHistory);
    getOperationHistory();
}

function addNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'add';
    postNewOperation(newOperation);
}

function subtractNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'subtract';
    postNewOperation(newOperation);
}

function divideNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'divide';
    postNewOperation(newOperation);
}

function multiplyNumbers() {
    newOperation = insertNumbers();
    newOperation.operation = 'multiply';
    postNewOperation(newOperation);
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
    console.log(newOperation);
    $.ajax({
        method: 'POST',
        url: '/new-operation',
        data: newOperation
    })
        .then(function (response) {
            console.log(response);
        });
}

function getOperationHistory() {
    $.ajax({
        type: 'GET',
        url: '/operation-history'
    })
    .then(function (response) {
        console.log(response);
    });
}