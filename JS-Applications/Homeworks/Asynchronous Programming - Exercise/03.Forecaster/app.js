function attachEvents() {
    let conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    };

    const location = document.getElementById('location');
    const forecast = document.getElementById('forecast');
    const submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', getWether);

    async function getWether(ev) {
        ev.preventDefault();

        try {
            const url = `http://localhost:3030/jsonstore/forecaster/locations`;

            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(`${res.status} (${res.statusText})`);
            }

            const town = data.find(x => x.name.toLowerCase() === location.value.toLowerCase());

            if (!town) {
                throw new Error(`Error (Invalid city name!)`);
            }

            forecast.style.display = 'block';

            if (town) {
                getWetherCurrent(town.code);
                getWetherUpcoming(town.code);

                location.value = '';
            }
        } catch (error) {
            forecast.style.display = 'block';

            const pElement = createElement('p', error.message, ['id', 'errorMessage']);

            forecast.appendChild(pElement);
        }
    }

    async function getWetherCurrent(code) {

        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove();
        }

        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const res = await fetch(url);
        const data = await res.json();

        const divCurrent = document.getElementById('current');

        if (document.querySelector('div.forecasts')) {
            document.querySelector('div.forecasts').remove()
        }

        const divForecasts = createElement('div', '', ['class', 'forecasts']);

        const spanConditionSymbol = createElement('span', conditions[data.forecast.condition], ['class', 'condition symbol']);

        const spanCondition = createElement('span', '', ['class', 'condition']);

        const townName = createElement('span', data.name, ['class', 'forecast-data']);
        const degreesRange = createElement('span', `${data.forecast.low}/${data.forecast.high}°`);
        const condition = createElement('span', data.forecast.condition, ['class', 'forecast-data']);

        spanCondition.appendChild(townName);
        spanCondition.appendChild(degreesRange);
        spanCondition.appendChild(condition);

        divForecasts.appendChild(spanConditionSymbol);
        divForecasts.appendChild(spanCondition);

        divCurrent.appendChild(divForecasts);
    }

    async function getWetherUpcoming(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        const res = await fetch(url);
        const data = await res.json();

        const divUpcoming = document.getElementById('upcoming');

        if (document.querySelector('div.forecast-info')) {
            document.querySelector('div.forecast-info').remove()
        }

        const divForecastInfo = createElement('div', '', ['class', 'forecast-info']);

        for (const forecast of data.forecast) {

            const spanUpcoming = createElement('span', '', ['class', 'upcoming']);

            const symbol = createElement('span', conditions[forecast.condition], ['class', 'symbol']);
            const degreesRange = createElement('span', `${forecast.low}/${forecast.high}°`);
            const condition = createElement('span', forecast.condition, ['class', 'forecast-data']);

            divForecastInfo.appendChild(symbol);
            spanUpcoming.appendChild(degreesRange);
            spanUpcoming.appendChild(condition);
            
            divForecastInfo.appendChild(spanUpcoming);
        }

        divUpcoming.appendChild(divForecastInfo);
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1]);
        }

        return element;
    }
}

attachEvents();