function generateReport() {
    let checkboxElements = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let trElements = document.querySelectorAll('tbody tr')

    let checkedElements = [];

    for (let i = 0; i < checkboxElements.length; i++) {
        if (checkboxElements[i].checked) {
            checkedElements.push([checkboxElements[i].name, i]);
        }
    }

    let arrResult = [];

    for (let i = 0; i < trElements.length; i++) {
        let objElements = {};

        for (let j = 0; j < checkedElements.length; j++) {
            objElements[checkedElements[j][0]] = trElements[i].cells[checkedElements[j][1]].textContent;
        }

        arrResult.push(objElements);
    }

    let resultElement = document.getElementById('output');
    resultElement.value = JSON.stringify(arrResult, null, ' ');
}