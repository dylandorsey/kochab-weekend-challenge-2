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
    $('#deleteHistoryBtn').on('click', deleteHistory);
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
            console.log(response);
            displayOperationHistory(response);
        });
}

function displayOperationHistory(historyArray) {
    // for (operationObject in historyArray) {
    //     if (operationObject.operation = 'add') {
    //         operation = '+';
    //     }
    //     else if (operationObject.operation = 'subtract') {
    //         operation = '-';
    //     }
    //     else if (operationObject.operation = 'multiply') {
    //         operation = '*';
    //     }
    //     else if (operationObject.operation = 'divide') {
    //         operation = '/';
    //     }
    // }
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
