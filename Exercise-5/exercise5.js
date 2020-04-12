let inputSentence = document.getElementById("inputSentence");
let displayInputSentence = document.getElementById("displayInputSentence");
let splitValue = document.getElementById("splitValue");
let displaySplitValue = document.getElementById("displaySplitValue");
let splitOperation = document.getElementById("split");
let finalArray = [];


splitOperation.onclick = () => {
    if (inputSentence.value !== "" && splitValue.value > 0) {
        displayInputSentence.innerHTML = inputSentence.value;
        displaySplitValue.innerHTML = splitValue.value;
        slipword(inputSentence.value, parseInt(splitValue.value));
        inputSentence.value = "";
        splitValue.value = "";
    }
    else {
        alert("Please fill the fields properly");
    }
}

function slipword(inputSentence, splitValue) {
    let inputSentenceSplit = inputSentence.split(" ");
    if (inputSentence !== "") {
        for (let iterate = 0; iterate < inputSentenceSplit.length; iterate++) {
            if (inputSentenceSplit[iterate].length < splitValue) {
                let test = inputSentenceSplit[iterate] + " " + inputSentenceSplit[iterate + 1];
                let indexTracker = [inputSentenceSplit.indexOf(inputSentenceSplit[iterate]), inputSentenceSplit.indexOf(inputSentenceSplit[iterate + 1])];
                let indexSet = new Set(indexTracker);
                if (inputSentenceSplit.length === 1) {
                    finalArray.push(inputSentenceSplit[iterate]);
                    break;
                }
                else if (test.length !== splitValue) {
                    test = test.split(" ");
                }
                finalArray = finalArray.flat(finalArray.push(test));
                inputSentenceSplit = inputSentenceSplit.filter((value, i) => !indexSet.has(i))
                inputSentence = inputSentenceSplit.join(" ");
                slipword(inputSentence, splitValue);
                return;
            }
            else {
                finalArray.push(inputSentenceSplit[iterate]);
                inputSentenceSplit.splice(iterate, 1);
                inputSentence = inputSentenceSplit.join(" ");
                slipword(inputSentence, splitValue);
                return;
            }
        }
    }
    console.log(finalArray);
}
