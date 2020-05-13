
let matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let exitCheck = document.getElementById("userOutput");
let jaggedMatrix = false;


document.getElementById("showBoard").innerHTML = JSON.stringify(matrix);

exitCheck.onclick = () => {
    checkJaggedMatrix()
}

function checkJaggedMatrix() {
    if (matrix.length > 1) {
        for (let i = 0; i < matrix.length; i++) {
            let rowlengthComparison = matrix[0].length;
            if (matrix[i].length !== rowlengthComparison) {
                jaggedMatrix = true
                console.log("This is a jagged matrix")
                break;
            }
            else {
                jaggedMatrix = false;
            }
        }
        if (!jaggedMatrix) {
            checkPath()
        }
    }
    else {
        checkPath();
    }
}

function checkPath() {
    const firstColumnAndFirstRow = matrix.map((subArray, subArrayIndex) => {
        if (!subArrayIndex) {
            return subArray.map(subArrayElements => 1);
        }
        else {
            return subArray.map((subArrayElements, subArrayElementIndex) => {
                return !subArrayElementIndex ? 1 : subArrayElements
            });
        }
    });
    console.log(firstColumnAndFirstRow);
    const possiblePath = firstColumnAndFirstRow.map((subArray, subArrayIndex) => {
        if (subArrayIndex) {
            subArray.map((subArrayElements, subArrayElementIndex) => {
                if (subArrayElementIndex) {
                    firstColumnAndFirstRow[subArrayIndex][subArrayElementIndex] =
                        firstColumnAndFirstRow[subArrayIndex][subArrayElementIndex - 1] + firstColumnAndFirstRow[subArrayIndex - 1][subArrayElementIndex];
                }
            });
        }
        return subArray;
    });
    console.log(possiblePath);
}


