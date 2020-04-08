let inputvalue = document.getElementById("inputValues");
let getInput = document.getElementById("getInput");
let getInputChunk = document.getElementById("getInputChunk");
let displayInputArray = document.getElementById("displayInputArray");
let displayChunkValue = document.getElementById("displayChunkValue");
let inputArray = [];


getInput.onclick = () => {
    if (inputvalue.value !== "") {
        inputArray.push(inputvalue.value);
        displayInputArray.innerHTML = `[${inputArray}]`;
        inputvalue.value = "";
    }
    else {
        alert('Please give an input value');
    }
}

getInputChunk.onclick = () => {
    if (displayInputChunk.value !== "" && displayInputChunk.value > 0 && inputArray.length > 0) {
        displayChunkValue.innerHTML = `${displayInputChunk.value}`;
        chunking(inputArray, displayInputChunk.value);
        displayChunkValue.value = "";
    } else {
        alert('Fill the Chunk Input Field properly');
    }
}


function chunking(mainArray, chunkValue) {
    let baseArray = [], chunkSize = parseInt(chunkValue);
    for (let iterate = 0; iterate < mainArray.length; iterate += chunkSize) {
        baseArray.push(mainArray.slice(iterate, iterate + chunkSize));
    }
    console.log(baseArray);
}










