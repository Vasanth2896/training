let inputvalue = document.getElementById("inputValues");
let getInput = document.getElementById("getInput");
let getInputChunk = document.getElementById("getInputChunk");
let getInputChunkSum = document.getElementById("getInputChunkSum")
let displayInputArray = document.getElementById("displayInputArray");
let displayChunkValue = document.getElementById("displayChunkValue");
let displayChunkSumValue = document.getElementById("displayChunkSumValue")
let inputArray = [];
let baseArray = [];

getInput.onclick = () => {
    if (inputvalue.value !== "") {
        inputArray.push(parseInt(inputvalue.value));
        displayInputArray.innerHTML = `[${inputArray}]`;
        inputvalue.value = "";
    }
    else {
        alert('Please give an input value');
    }
}

getInputChunk.onclick = () => {
    if (displayInputChunk.value !== "" && displayInputChunk.value > 1) {
        displayChunkValue.innerHTML = `${displayInputChunk.value}`;
        displayInputChunk.value = "";
    } else {
        alert('Fill the Chunk size Field properly');
    }
}

getInputChunkSum.onclick = () => {
    if (displayInputChunkSum.value !== "" && displayInputChunkSum.value > 0 && inputArray.length > 0 && displayChunkValue.innerText != null) {
        displayChunkSumValue.innerHTML = `${displayInputChunkSum.value}`;
        inputArray.sort((a, b) => a - b);
        chunkingSum(inputArray, parseInt(displayChunkValue.innerText), parseInt(displayInputChunkSum.value));
        displayInputChunkSum.value = ""
    }
    else {
        alert('Fill all the fields properly')
    }
}


function chunkingSum(mainArray, chunkSize, chunkSum) {
    let duplicateDummy = JSON.parse(JSON.stringify(mainArray));

    if (duplicateDummy.length > 1) {
        for (let i = 0; i < duplicateDummy.length; i++) {
            let firstElement = duplicateDummy.shift();
            for (j = 0; j < duplicateDummy.length; j++) {
                if (firstElement + duplicateDummy[j] === chunkSum) {
                    baseArray.push([firstElement, duplicateDummy[j]]);
                    duplicateDummy.splice(j, 1);
                    chunkingSum(duplicateDummy, chunkSize, chunkSum);
                    return;
                }
            }
        }
    }

    console.log(baseArray);
}













