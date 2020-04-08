let selectContainer = document.getElementById("selectContainer")

function createDynamicDropDown() {
    let data = [
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
    createDropDown(data)
}

function createDropDown(data) {
    let dropDown = document.createElement('select')
    for (let iterate = 0; iterate < data.length; iterate++) {
        dropDown.innerHTML += (`<option id=${data[iterate].name}>${data[iterate].name}</option>`)
    }
    selectContainer.append(dropDown)
    dropDown.onclick = () => renderDynamically(dropDown,data)
}

function renderDynamically(dropDown,data) {
    let subData = data[dropDown.selectedIndex].data
    let nextDropDown = dropDown.nextElementSibling
    while (nextDropDown) {
        selectContainer.removeChild(nextDropDown)
        nextDropDown = dropDown.nextElementSibling
    }
    if (subData && subData.length != 0) {
        createDropDown(subData)
    }
}


createDynamicDropDown()
























