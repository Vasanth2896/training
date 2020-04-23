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
let nonExistingWords = [];
let callCount = 0;
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
    checkCommon(board, inputArray);
    checkDiagonally(board, inputArray);
    console.log(`These are the existing words:${existingWords}`, `These are the non existing words:${inputArray}`);
}

function checkCommon(board, inputArray) {
    debugger;
    if (inputArray.length !== 0) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < inputArray.length; j++) {
                if (board[i].join("").includes(inputArray[j])) {
                    existingWords.push(inputArray[j]);
                    inputArray.splice(j, 1);
                    checkCommon(board, inputArray);
                    return;
                }
            }
        }
    }
    callCount++;
    transpose();
    if (callCount <= 1) {
        checkCommon(board, inputArray);
    }
}

function checkDiagonally(board, inputArray) {
    if (inputArray.length !== 0) {
        for (let k = 0; k <= board.length - 1; k++) {
            let i = k, j = 0;
            let temp = [];
            while (i >= 0) {
                temp.push(board[i][j]);
                if (i === 0) {
                    let stringTest = temp.join("");
                    for (let iterate = 0; iterate < inputArray.length; iterate++) {
                        if (stringTest.includes(inputArray[iterate])) {
                            existingWords.push(inputArray[iterate]);
                            inputArray.splice(iterate, 1);
                            checkDiagonally(board, inputArray);
                            return;
                        }
                    }
                }
                i--;
                j++;
            }
        }
        for (let k = 1; k <= board[7].length - 1; k++) {
            let i = board.length - 1, j = k;
            let temp = [];
            while (j <= board[7].length - 1) {
                temp.push(board[i][j]);
                if (i === 0) {
                    let stringTest = temp.join("");
                    for (let iterate = 0; iterate < inputArray.length; iterate++) {
                        if (stringTest.includes(inputArray[iterate])) {
                            existingWords.push(inputArray[iterate]);
                            existingWords.splice(iterate, 1);
                            checkDiagonally(board, inputArray);
                            return;
                        }
                    }
                }
                i--;
                j++;
            }
        }
    }
    // console.log(existingWords, inputArray);
}





