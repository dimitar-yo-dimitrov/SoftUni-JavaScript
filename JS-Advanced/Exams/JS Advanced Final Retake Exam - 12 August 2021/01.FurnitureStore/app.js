window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');

    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', (ev) => {
        ev.preventDefault();

        let yearNum = Number(yearInputElement.value);
        let priceNum = Number(priceInputElement.value);

        if (modelInputElement.value &&
            descriptionInputElement.value &&
            yearNum > 0 &&
            priceNum > 0) {

            let tbodyElement = document.getElementById('furniture-list');

            let trElement = document.createElement('tr');
            trElement.className = 'info';

            let modelTD = document.createElement('td');
            let priceTD = document.createElement('td');

            modelTD.textContent = modelInputElement.value;
            priceTD.textContent = `${priceNum.toFixed(2)}`;

            trElement.appendChild(modelTD);
            trElement.appendChild(priceTD);

            let tdElements = document.createElement('td');
            let moreBtnElement = document.createElement('button');
            moreBtnElement.className = 'moreBtn';
            moreBtnElement.textContent = 'More Info';
            tdElements.appendChild(moreBtnElement);

            moreBtnElement.addEventListener('click', (ev) => {

                if (ev.currentTarget.textContent == 'More Info') {

                    ev.currentTarget.textContent = 'Less Info';
                    trHideElement.style.display = 'contents';
                } else {

                    ev.currentTarget.textContent = 'More Info';
                    trHideElement.style.display = 'none';
                }
            });

            let buyBtnElement = document.createElement('button');
            buyBtnElement.className = 'buyBtn';
            buyBtnElement.textContent = 'Buy it';
            tdElements.appendChild(buyBtnElement);

            let totalPriceElement = document.querySelector('.total-price');

            buyBtnElement.addEventListener('click', () => {

                let currentTotalPrice = Number(totalPriceElement.textContent);
                totalPriceElement.textContent = (currentTotalPrice + priceNum).toFixed(2);

                trHideElement.remove();
                trElement.remove();
            });

            let trHideElement = document.createElement('tr');
            trHideElement.className = 'hide';

            let tdYearElement = document.createElement('td')
            let tdDescriptionElement = document.createElement('td')

            tdYearElement.textContent = `Year: ${yearNum}`;
            tdDescriptionElement.setAttribute('colspan', 3);
            tdDescriptionElement.textContent = `Description: ${descriptionInputElement.value}`;

            trHideElement.appendChild(tdYearElement);
            trHideElement.appendChild(tdDescriptionElement);
            
            trElement.appendChild(tdElements);
           
            tbodyElement.appendChild(trElement);
            tbodyElement.appendChild(trHideElement);

            modelInputElement.value = '';
            yearInputElement.value = '';
            descriptionInputElement.value = '';
            priceInputElement.value = '';
        }
    });
}
