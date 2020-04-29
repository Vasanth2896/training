let input = document.getElementById("userInput");
let getUserInput = document.getElementById("getUserInput");
let displayInput = document.getElementById("displayInputValues");
let output = document.getElementById("userOutput");
let inputArray = [];
let board = [
    ["r", "e", "c", "k", "l", "e", "s", "s"],
    ["a", "e", "o", "n", "i", "x", "o", "e"],
    ["t", "l", "a", "x", "m", "e", "n", "n"],
    ["e", "a", "t", "c", "i", "x", "i", "t"],
    ["c", "o", "u", "n", "t", "i", "c", "e"],
    ["a", "x", "a", "r", "e", "a", "x", "n"],
    ["r", "e", "x", "a", "t", "e", "m", "c"],
    ["d", "e", "a", "d", "l", "i", "n", "e"]
];
let existingWords = [];
let callCount = 0;
let Ylength = board.length;
let Xlength = board[0].length;
let maxLength = Math.max(Xlength, Ylength);
let bottomToTop = true;
let k;

document.getElementById("showBoard").innerHTML = JSON.stringify(board);

let transpose = () => {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < row; column++) {
            const temp = board[row][column];
            board[row][column] = board[column][row];
            board[column][row] = temp;
        }
    }
}

getUserInput.onclick = () => {
    if (input.value !== "") {
        inputArray.push(input.value);
        displayInput.innerHTML = `[${inputArray}]`;
        input.value = "";
    }
    else {
        alert(`The field is empty`);
    }
}

output.onclick = () => {
    if (inputArray.length > 0) {
        traverse(board);
    }
    else {
        alert(`There are no values in the input array`);
    }
}

function traverse(board) {
    checkHorizontallyAndVertically(board, inputArray);
    checkDiagonally(board, inputArray);
    console.log(`These are the existing words:${existingWords}`, `These are the non existing words:${inputArray}`);
}

function checkHorizontallyAndVertically(board, inputArray) {
    if (inputArray.length !== 0) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < inputArray.length; j++) {
                if (board[i].join("").includes(inputArray[j])) {
                    existingWords.push(inputArray[j]);
                    inputArray.splice(j, 1);
                    checkHorizontallyAndVertically(board, inputArray);
                    return;
                }
            }
        }
    }
    callCount++;
    transpose();
    if (callCount <= 1) {
        checkHorizontallyAndVertically(board, inputArray);
    }
}

function compareInputDiagonally(temp) {

    let baseComparisonString = temp.join("");
    for (let iterate = 0; iterate < inputArray.length; iterate++) {
        if (baseComparisonString.includes(inputArray[iterate])) {
            existingWords.push(inputArray[iterate]);
            inputArray.splice(iterate, 1);
            checkDiagonally(board, inputArray);
            return;
        }
    }
    if (k === (2 * maxLength) - 1) {
        bottomToTop = false;
        checkDiagonally(board, inputArray);
    }
}

function checkDiagonally(board, inputArray) {
    if (inputArray.length !== 0) {
        let temp;
        for (k = 0; k <= 2 * maxLength; ++k) {
            temp = [];
            for (let y = Ylength - 1; y >= 0; --y) {
                let x = k - (bottomToTop ? Ylength - y : y);
                if (x >= 0 && x < Xlength) {
                    temp.push(board[y][x]);
                    if (bottomToTop && (x === 0 || y === 0)) {
                        compareInputDiagonally(temp);
                    }
                    else if (!bottomToTop && (x === 7 || y === 0)) {
                        compareInputDiagonally(temp);
                    }

                }
            }
        }
    }
}





