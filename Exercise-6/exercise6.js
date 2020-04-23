let inputArray = [];
let userInput = document.getElementById("userInput");
let displayUserInput = document.getElementById("displayInputValues");
let getUserInput = document.getElementById("getUserInput");
let joinString = document.getElementById("userOutput");
const finalArray = [];
let minCount = 0;


getUserInput.onclick = () => {
    if (userInput.value !== "") {
        inputArray.push(userInput.value);
        displayUserInput.innerHTML = `[${inputArray}]`
        userInput.value = "";
    } else {
        alert("Please fill the field properly");
    }
}

joinString.onclick = () => {
    if (inputArray.length !== 0) {
        join(inputArray);
    } else {
        alert("The Input array is empty");
    }
}

function join(inputArray) {
    let characterOccurence = [];
    inputArray.map((item, index) => {
        let frequency = {};
        for (let iterate = 0; iterate < item.length; iterate++) {
            let character = item.charAt(iterate);
            if (frequency[character]) {
                frequency[character]++;
            } else {
                frequency[character] = 1;
            }
        }
        characterOccurence.push({index, ...frequency});
    }
    )
    comparison(characterOccurence);
}

function comparison(RecurringCharacter) {
    if (RecurringCharacter.length === 1) {
        console.log(inputArray, minCount);
    }
    else {
        const characterOccurence = [{ ...RecurringCharacter[0] }, { ...RecurringCharacter[1] }];

        const characterOccurenceIndex1 = characterOccurence[0]["index"];
        const characterOccurenceIndex2 = characterOccurence[1]["index"];
        const found = Object.keys(characterOccurence[0]).some(keys => Object.keys(characterOccurence[1]).some(keys1 => {
            if (keys === keys1 && keys !== "index" && keys1 !== "index") {
                return true
            }
        }))
        if (found) {
            Object.keys(characterOccurence[0]).map(item => Object.keys(characterOccurence[1]).map(item1 => {
                if (item === item1 && item !== "index" && item1 !== "index") {
                    const minNumber = Math.min(characterOccurence[0][item], characterOccurence[1][item1]);
                    minCount = minCount ? Math.min(minCount, minNumber) : minNumber;
                    const smallest = characterOccurence[0][item] > characterOccurence[1][item1] ? characterOccurenceIndex2 : characterOccurenceIndex1;
                    if (inputArray.length > 1) {
                        const temp = inputArray[smallest].split("").filter(letters => letters !== item).join('');
                        const concatString = smallest ? inputArray[characterOccurenceIndex1].concat(temp) : temp.concat(inputArray[characterOccurenceIndex2]);
                        const indexSet = new Set([characterOccurenceIndex1, characterOccurenceIndex2]);
                        const arrayWithValuesRemoved = inputArray.filter((value, i) => !indexSet.has(i));
                        inputArray = [concatString, ...arrayWithValuesRemoved];
                    }
                    else {
                        join(inputArray);
                        return;
                    }
                }

            })
            )
            join(inputArray);
        }
        else {
            const concatString = inputArray[characterOccurenceIndex1].concat(inputArray[characterOccurenceIndex2])
            const indexSet = new Set([characterOccurenceIndex1, characterOccurenceIndex2]);
            const arrayWithValuesRemoved = inputArray.filter((value, i) => !indexSet.has(i));
            inputArray = [concatString, ...arrayWithValuesRemoved];
            join(inputArray);
        }
    }

}

