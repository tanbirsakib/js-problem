const numbers = [2, 34, 0, 7, 12, 75, -2, 34, 35, -6, 75];

function checkPositive(numbers){
    let positiveNumbers = [];
    for(const number of numbers){
        if(number>=0){
            positiveNumbers.push(number);
        } else break;
    }
    return positiveNumbers;
}

const positivesNumbers = checkPositive(numbers);
console.log(positivesNumbers);