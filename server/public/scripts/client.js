console.log('in js');

$(document).ready(onReady);

function onReady () {
    console.log('in jQ');
    $('#addBtn').on('click', addNumbers);
    $('#subtractBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#deleteHistoryBtn').on('click', deleteHistory);
}

function  addNumbers() {
    console.log('clicked add');
}
function subtractNumbers() {
    console.log('clicked subtract');
}
function divideNumbers() {
    console.log('clicked divide');
}
function multiplyNumbers() {
    console.log('clicked multiply');
}
function deleteHistory(){
    console.log('clicked delete history');
}