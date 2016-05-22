function thousands_separators(num) {

    var outPutString = '';
    var numberString = num.toString();

    if (numberString.indexOf('.') === -1) {
        outPutString = separateNumbers(numberString);
    }
    else {
        outPutString = separateDecimalPointNumbers(numberString)
    }

    return outPutString;
}


function separateNumbers(numberString) {

    var resultString = '';

    while (numberString.length > 3) {
        resultString += ',' + numberString.slice(-3);
        numberString = numberString.slice(0, numberString.length - 3);
    }
    if (numberString.length != 0) {
        resultString = numberString + resultString;
    }

    return resultString;
}


function separateDecimalPointNumbers(numberString) {

    var resultString = '';

    var newNumberString = numberString.split('.');

    while (newNumberString[0].length > 3) {
        resultString += ',' + newNumberString[0].slice(-3);
        newNumberString[0] = newNumberString[0].slice(0, newNumberString[0].length - 3);
    }

    if (newNumberString[0].length != 0) {
        resultString = newNumberString[0] + resultString + '.' + newNumberString[1];
    }

    return resultString;
}

module.exports = thousands_separators;
