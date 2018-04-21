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
}

function addNumbers() {
    console.log('clicked add');
    newOperation = insertNumbers();
    newOperation.operation = 'add';
    console.log('operation to be posted:');
    console.log(newOperation);
    postNewOperation(newOperation);
}

function subtractNumbers() {
    insertNumbers();
    newOperation.operation = 'subtract';
    console.log('clicked subtract');
    postNewOperation(newOperation);
}

function divideNumbers() {
    insertNumbers();
    newOperation.operation = 'divide';
    console.log('clicked divide');
}

function multiplyNumbers() {
    insertNumbers();
    newOperation.operation = 'multiply';
    console.log('clicked multiply');
}

function deleteHistory() {
    console.log('clicked delete history');
}

function insertNumbers() {
    newOperation.numberOne = $('#numberOne').val();
    newOperation.numberTwo = $('#numberTwo').val();
    return newOperation;
}

function postNewOperation(newOperation){
    console.log(newOperation);
    $.ajax({
        method: 'POST',
        url: '/new-operation',
        data: newOperation
    })
    .then(function(response){
        console.log(response);
    });
}