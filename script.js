//Function 1

function checkLength(str) {
    let length = 0;

    for (let i = 0; i < str.length; i++) {
        if (i < str.length) {
            length += 1;
        }
    }

    if (length > 5) {
        return true;
    }

    return false;
}

console.log(checkLength('Sudarshan'), 'Function 1');

//Function 2

function hasUpLoCase(str) {
    // RegExp...
    if (/[a-z]/.test(str) && /[A-Z]/.test(str)) {
        return true;
    }
    return false;
}

console.log(hasUpLoCase('Sudarshan Gurung'), 'Function 2');

//Function 3

function checkNum(str) {
    let total = 0;

    for (let i = 0; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) {
            total += 1;
        }
    }
    if (total > 1) {
        return true;
    }

    return false;
}

console.log(checkNum('Today is the friday 14th of April'), 'Function 3');

//DOM
const user = document.querySelector('.username');
const btnSubmit = document.querySelector('.btn');

// Button
btnSubmit.addEventListener('click', function () {
    const userInput = user.value;

    let func1 = false;
    let func2 = false;
    let func3 = false;
    let result = false;

    if (checkLength(userInput)) {
        func1 = true;
    }
    if (hasUpLoCase(userInput)) {
        func2 = true;
    }
    if (checkNum(userInput)) {
        func3 = true;
    }

    if (func1 && func2 && func3) {
        result = true;

        document.querySelector('body').style.backgroundColor = 'Green';

        document.querySelector('.head1').textContent = 'Username Available';
    } else {
        document.querySelector('body').style.backgroundColor = 'Red';

        document.querySelector('.head1').textContent = 'Username Not-Valid';
    }

    console.log(
        userInput,
        'Check-Length:',
        func1,
        'Has-Up-Low:',
        func2,
        'Check-Num:',
        func3,
        'Result:',
        result
    );
    return result;
});
