let input = document.getElementById("userInput");
let getUserInput = document.getElementById("getUserInput");
let displayInput = document.getElementById("displayInputValues");
let output = document.getElementById("userOutput");
let x = 0, y = 0;
let inputCoordinateArray = [];
let finalCoordinateArray;
let direction = ["N", "E", "S", "W"];

getUserInput.onclick = () => {
    if (input.value !== "") {
        inputCoordinateArray.push(parseInt(input.value));
        input.value = "";
        displayInput.innerHTML = `[${inputCoordinateArray}]`;
    }
    else {
        alert("Fill the fields properly");
    }
}

output.onclick = () => {
    if (inputCoordinateArray.length !== 0) {
        findPosition(inputCoordinateArray);
    }
    else {
        alert(`There are no co-ordinates present`);
    }
}

function findPosition(inputCoordinateArray) {
    debugger;
    let removeValFromIndex = [];
    for (let iterate = 0; iterate < direction.length && inputCoordinateArray[iterate] !== undefined; iterate++) {
        if (direction[iterate] === "N") {
            y += inputCoordinateArray[iterate];
        }
        else if (direction[iterate] === "E") {
            x += inputCoordinateArray[iterate];
        }
        else if (direction[iterate] === "S") {
            y += inputCoordinateArray[iterate] > 0 ? -inputCoordinateArray[iterate] : Math.abs(inputCoordinateArray[iterate]);
        }
        else if (direction[iterate] === "W") {
            x += inputCoordinateArray[iterate] > 0 ? -inputCoordinateArray[iterate] : Math.abs(inputCoordinateArray[iterate]);
        }
        removeValFromIndex.push(iterate);
        console.log(x,y);
    }
    const indexSet = new Set(removeValFromIndex);
    const arrayWithValuesRemoved = inputCoordinateArray.filter((value, i) => !indexSet.has(i));
    
    if (arrayWithValuesRemoved.length > 0) {
        findPosition(arrayWithValuesRemoved);
        return;
    }
    
    finalCoordinateArray = [x, y];
    console.log(`The Final Position is [${finalCoordinateArray}]`);
}









