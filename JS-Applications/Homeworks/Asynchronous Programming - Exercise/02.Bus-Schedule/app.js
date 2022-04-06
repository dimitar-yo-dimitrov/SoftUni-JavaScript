function solve() {

    const info = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: '0361'
    };

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            stop = data;

            info.textContent = `Next stop ${stop.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            info.textContent = `Error`;

            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();