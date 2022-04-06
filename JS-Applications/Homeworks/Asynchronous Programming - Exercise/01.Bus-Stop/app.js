async function getInfo() {

    const stopIdInput = document.getElementById('stopId');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput.value}`;

    const stopName = document.getElementById('stopName');

    try {
        stopIdInput.value = '';

        const ulElement = document.getElementById('buses');

        ulElement.replaceChildren();

        const response = await fetch(url);
        const data = await response.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).map(([bus, time]) => {
            let result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ulElement.appendChild(result);
        });

    } catch (error) {
        stopName.textContent = 'Error';
    }
}