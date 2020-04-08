let dataSet = [
    {
        id: 1,
        name: 'Arvind',
        data: [
            {
                id: 1,
                name: 'Arvind1'
            },
            {
                id: 2,
                name: 'Arvind2'
            },
            {
                id: 3,
                name: 'Arvind3'
            }
        ]
    },
    {
        id: 2,
        name: 'Sindhu',
        data: [
            {
                id: 1,
                name: 'Sindhu1'
            }
        ]
    },
    {
        id: 3,
        name: 'Mani',
    },
    {
        id: 4,
        name: 'Dhana',
        data: [
            {
                id: 1,
                name: 'Dhana1',
                data: [
                    {
                        id: 1,
                        name: 'Dhana11'
                    }
                ]
            },
            {
                id: 2,
                name: 'Dhana2'
            },
            {
                id: 3,
                name: 'Dhana3'
            }
        ]
    },
    {
        id: 5,
        name: 'Sathish',
    }
]

let replace = document.getElementById("replace")

replace.onclick = () => {
    let existingKey = document.getElementById("existingKey")
    let newKey = document.getElementById("newKey")
    if (existingKey.value !== "" && newKey.value !== "") {
        setKey(dataSet)
        existingKey.value = ""
        newKey.value = ""
    }
    else {
        alert("Fill the input boxes")
    }
}


function setKey(testData) {
    const oldKey = existingKey.value;
    let replacementKey = newKey.value;

    testData.map(item => Object.keys(item).map(x => {

        if (x === oldKey) {
            item[x] = item[oldKey]
            item[replacementKey] = item[oldKey];
            delete item[oldKey]
        }

        if (Array.isArray(item[x])) {
            setKey(item[x]);
        }
    }))

    console.log(testData)
}




























