console.log('in js');

$(document).ready(onReady);

const newOperation = {
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
    insertNumbers();
    newOperation.operation = 'add';
    console.log(newOperation);
    console.log('clicked add');
    postNumbers();
}

function subtractNumbers() {
    insertNumbers();
    newOperation.operation = 'subtract';
    console.log('clicked subtract');
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


